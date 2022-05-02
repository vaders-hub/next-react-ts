import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.scss'
import CustHeader from '@/components/common/Header'

export default function Layout({ children, home }: any) {
  return (
    <>
      <div className={styles.container}>
        <CustHeader />
        <main className={styles.main}>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
