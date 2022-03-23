import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLang } from "src/reducers/lang";
import menu from "src/routes";
import path from "path";
import styles from "@/styles/layout.module.scss";

export default function Header() {
  const dispatch = useDispatch();
  const [mp, setMp] = useState(true);
  const onClickMenu = () => {
    mp ? setMp(false) : setMp(true);
  };
  const setLangs = (lan: string) => {
    dispatch(setLang(lan));
  };
  const langs = ["en", "dt", "fr"];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.drawer}>
          <div>
            <button onClick={onClickMenu}>menu {mp}</button>
          </div>
          <ul className={mp ? styles.closed : styles.open}>
            {menu.map((page, i) => {
              return (
                <li key={i}>
                  <Link href={page.path}>
                    <a onClick={(e) => onClickMenu()}>{page.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.selectLang}>
          {langs.map((lan, idx) => {
            return (
              <button key={idx} onClick={(e) => setLangs(lan)}>
                {lan}
              </button>
            );
          })}
        </div>
        <div
          className={mp ? styles.closed : styles.dim}
          onClick={onClickMenu}
        ></div>
      </header>
    </>
  );
}
