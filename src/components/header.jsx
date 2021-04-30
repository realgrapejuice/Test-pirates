import Nav from "./nav";
import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <div className={styles.head}>
      <Link to="/홈">
        <img src="/images/로고.JPG" alt="인어교주해적단 로고" />
      </Link>
      <button type="button">로그인/가입</button>
    </div>
    <Nav />
  </header>
);

export default Header;
