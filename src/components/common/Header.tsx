import Link from "next/link";
import styles from "@/styles/layout.module.scss";
import { useState } from "react";
import menu from "src/routes";

export default function Header() {
  const [mp, setMp] = useState(true);
  const onClickMenu = () => {
    mp ? setMp(false) : setMp(true);
  };

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
                  <Link href={page.path}>{page.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.selectLang}>
          <button>En</button>
          <button>Dt</button>
          <button>Fr</button>
        </div>
      </header>
    </>
  );
}
