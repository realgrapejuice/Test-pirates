import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  const style = {
    fontWeight: "700",
    color: "#1c79bc",
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/홈" activeStyle={style}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/시장" activeStyle={style}>
            시장
          </NavLink>
        </li>
        <li>
          <NavLink to="/쇼핑" activeStyle={style}>
            쇼핑
          </NavLink>
        </li>
        <li>
          <NavLink to="/콘텐츠" activeStyle={style}>
            콘텐츠
          </NavLink>
        </li>
        <li>
          <NavLink to="/시세" activeStyle={style}>
            시세
          </NavLink>
        </li>
        <li>
          <NavLink to="/도매" activeStyle={style}>
            도매
          </NavLink>
        </li>
        <li>
          <NavLink to="/후기" activeStyle={style}>
            후기
          </NavLink>
        </li>
        <li>
          <NavLink to="/문의" activeStyle={style}>
            문의
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
