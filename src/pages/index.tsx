import type { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { FormattedMessage } from 'react-intl'
import utilStyles from '../styles/utils.module.css'

import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const GET_BBS = gql`
  {
    queryBBS {
      title
    }
  }
`

const Home: NextPageWithLayout = () => {
  const { loading, error, data } = useQuery(GET_BBS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>
  console.log('HOME..', data)
  return (
    <>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>INDEX PAGE</section>
    </>
  )
}

export default Home
