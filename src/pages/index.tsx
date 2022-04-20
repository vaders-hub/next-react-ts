import { lazy, Suspense, useEffect, useState } from 'react'
import {
  DocumentNode,
  useQuery,
  useLazyQuery,
  useMutation,
} from '@apollo/react-hooks'
import { FormattedMessage } from 'react-intl'
import { GET_BBS } from 'src/schema'
import utilStyles from '../styles/utils.module.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  const [search, { data }] = useLazyQuery(GET_BBS)
  const fetchCall = async () => {
    await search()
  }
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        INDEX PAGE
      </section>
      <div>{data?.queryBBS ? data.queryBBS.code : ''}</div>
      <button onClick={fetchCall}>get gql Query </button>
    </>
  )
}

export default Home
