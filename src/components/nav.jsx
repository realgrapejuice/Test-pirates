import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/홈"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/시장"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            시장
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/쇼핑"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            쇼핑
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/콘텐츠"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            콘텐츠
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/시세"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            시세
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/도매"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            도매
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/후기"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            후기
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/문의"
            activeStyle={{
              fontWeight: "700",
              color: "#1c79bc",
            }}
          >
            문의
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
