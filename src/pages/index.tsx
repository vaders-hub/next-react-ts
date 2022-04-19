import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { query } from 'src/lib/gqlUtil'
import { GET_BBS } from 'src/schema'
import utilStyles from '../styles/utils.module.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  const data = query(GET_BBS)

  useEffect(() => {}, [])
  console.log('data', data, GET_BBS)
  return (
    <>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        INDEX PAGE
      </section>
      {/* <p>{data.queryBBS ? data.queryBBS.code : ''}</p> */}
    </>
  )
}

export default Home
