import styles from 'src/styles/layout.module.scss'

export default function Popup({ children }: any) {
  return (
    <div className={styles.container}>
      <p>POPUP</p>
      <main>{children}</main>
    </div>
  )
}
