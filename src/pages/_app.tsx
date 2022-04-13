import type { NextPage } from 'next'
import App, { AppContext, AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import { Provider, useSelector } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { wrapper } from 'src/stores/store'
import { useEffect, useState } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { IntlProvider } from 'react-intl'
import Layout from '@/components/layout'
import { useLangSet } from 'src/lib/stateUtils'
import ReactGA from 'src/lib/ga'
import '../styles/globals.css'

import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  store: any
}

const client = new ApolloClient({
  uri: 'https://localhost:443/api/graphql',
  cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [message, selectedLang, setMessageData] = useLangSet()

  useEffect(() => {
    setMessageData()
  }, [selectedLang])

  const myCustomErrorFunction = (err: any) => {
    if (err.code === 'MISSING_TRANSLATION') {
      return
    }
    throw err
  }

  if (Component.getLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
      <ApolloProvider client={client}>
        <IntlProvider locale={selectedLang} messages={message} onError={myCustomErrorFunction}>
          <ReactGA />
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>,
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <IntlProvider locale={selectedLang} messages={message} onError={myCustomErrorFunction}>
          <Layout home>
            <ReactGA />
            <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ApolloProvider>
    )
  }
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default wrapper.withRedux(MyApp)
