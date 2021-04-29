import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./slide.module.css";

const Slide = ({ bannerData }) => {
  const [slideStatus, setSlideStatus] = useState(true);
  const [index, setIndex] = useState(0);
  const length = bannerData.length;
  console.log(bannerData[0].label);
  const slideNext = () => {
    if (index < length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <ul className={styles.wrapper}>
      {bannerData.map((item, index) => (
        <li key={item.permalink}>
          <Link to={`/${item.permalink}`}>
            {item.label + " " + item.price + " " + "(20% 할인쿠폰)"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Slide;
