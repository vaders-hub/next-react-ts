import { lazy, Suspense, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { State } from 'src/interface/state'

import utilStyles from '../styles/utils.module.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  const {
    member: { memid },
  }: State = useSelector((state) => state)
  const displayName = memid === '' ? 'Guest' : memid

  return (
    <>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <FormattedMessage id="message.user" values={{ name: displayName }} />
      </section>
    </>
  )
}

export default Home
