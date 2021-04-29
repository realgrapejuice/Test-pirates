import React from "react";
import styles from "./nav.module.css";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className="nav__item">
          <a className={styles.link} href="/홈">
            홈
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/시장">
            시장
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/쇼핑">
            쇼핑
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/콘텐츠">
            콘텐츠
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/시세">
            시세
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/도매">
            도매
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/후기">
            후기
          </a>
        </li>
        <li className="nav__item">
          <a className={styles.link} href="/문의">
            문의
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
