import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'
import { setLang } from 'src/sagas/sagaLang'
import menu from 'src/routes'
import styles from '@/styles/layout.module.scss'

import type { State } from 'src/interface/state'

export default function Header() {
  const dispatch = useDispatch()
  const {
    member: { signedIn },
  }: State = useSelector((state) => state)
  const [mp, setMp] = useState(true)
  const onClickMenu = () => {
    mp ? setMp(false) : setMp(true)
  }
  const setLangs = useCallback((lan: string) => {
    dispatch(setLang(lan))
  }, [])
  const langs = ['en', 'de', 'fr']
  const availableMenu = menu.filter((v) => v.auth || (!v.auth && !signedIn))

  return (
    <>
      <header className={styles.header}>
        <div className={styles.drawer}>
          <div className={styles.menu}>
            <button className="menu" onClick={onClickMenu}>
              menu {mp}
            </button>
          </div>
          <ul className={mp ? styles.closed : styles.open}>
            {availableMenu.map((page, i) => {
              return (
                <li key={i}>
                  <Link href={page.path}>
                    <a onClick={(e) => onClickMenu()}>{page.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.selectLang}>
          {langs.map((lan, idx) => {
            return (
              <button
                key={idx}
                onClick={(e) => setLangs(lan)}
                className={styles[lan]}
              >
                {lan}
              </button>
            )
          })}
        </div>
        <div
          className={mp ? styles.closed : styles.dim}
          onClick={onClickMenu}
        ></div>
      </header>
    </>
  )
}
