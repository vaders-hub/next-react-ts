import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import gqlUtil from 'src/lib/gqlUtil'
import { GET_BBS } from 'src/schema'
import utilStyles from '../styles/utils.module.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  const data = gqlUtil(GET_BBS)

  useEffect(() => {}, [])

  return (
    <>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>INDEX PAGE</section>
      <p>{data.queryBBS ? data.queryBBS.title : ''}</p>
    </>
  )
}

export default Home
