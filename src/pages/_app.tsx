import type { NextPage } from 'next'
import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import Script from 'next/script'
import App, { AppContext, AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { wrapper } from 'src/stores/store'
import { useMemo, useEffect, useLayoutEffect, useState } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { IntlProvider } from 'react-intl'
import Layout from '@/components/layout'
import { usePrevious, useLangSet } from 'src/lib/stateUtils'
import { myCustomErrorFunction } from 'src/utils/intl'
import ReactGA from 'src/lib/ga'

import '../styles/globals.scss'

import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  store: any
}

const client = new ApolloClient({
  uri: 'https://localhost:443/graphql',
  cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [message, selectedLang, setMessageData] = useLangSet()

  useEffect(() => {
    setMessageData()
  }, [selectedLang])

  if (Component.getLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
      <ApolloProvider client={client}>
        <IntlProvider
          locale={selectedLang}
          messages={message}
          onError={myCustomErrorFunction}
        >
          <Head>
            <title>Greet</title>
          </Head>
          <ReactGA />
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>,
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <IntlProvider
          locale={selectedLang}
          messages={message}
          onError={myCustomErrorFunction}
        >
          <Head>
            <title>Greet</title>
          </Head>
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
