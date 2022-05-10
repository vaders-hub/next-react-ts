import styles from '../styles/layout.module.scss'
import CustHeader from '@/components/common/Header'

export default function Layout({ children, home }: any) {
  return (
    <>
      <div className={styles.container}>
        <CustHeader />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
