import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./slide.module.css";

const Slide = ({ bannerData }) => {
  /* 버튼 클릭에 따른 슬라이드 상태 변경과 관련된 변수들 */
  const [slideStatus, setSlideStatus] = useState(true);
  const changeStatus = () => {
    if (slideStatus) {
      setSlideStatus(false);
    } else {
      setSlideStatus(true);
    }
  };
  let listStyle = slideStatus ? `${styles.wrapper} on` : `${styles.wrapper}`;

  /* 자동으로 배너가 롤링될 수 있도록 하는 것과 관련된 변수들 */
  let [index, setIndex] = useState(0);
  const loadNextSlide = () => {
    if (index === bannerData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  /* Slide에 사용하는 button component 토글러 */
  const Button = () => {
    if (slideStatus) {
      return (
        <button
          type="button"
          className={styles.buttonUp}
          onClick={changeStatus}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className={styles.buttonDown}
          onClick={changeStatus}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      );
    }
  };

  /* Event handler */
  useEffect(() => {
    const timer = setInterval(loadNextSlide, 5000);
    return () => clearInterval(timer);
  });

  if (slideStatus) {
    return (
      <ul className={listStyle}>
        <li key={bannerData[index].permalink} className={styles.slideBanner}>
          <Link to={`/${bannerData[index].permalink}`}>
            {bannerData[index].label +
              " " +
              bannerData[index].price +
              ` <${bannerData[index].comment}>`}
          </Link>
        </li>
        <Button />
      </ul>
    );
  } else {
    return (
      <ul className={listStyle}>
        {bannerData.map((item) => (
          <li key={item.permalink}>
            <Link to={`/${item.permalink}`}>
              {item.label + " " + item.price + ` <${item.comment}>`}
            </Link>
          </li>
        ))}
        <Button />
      </ul>
    );
  }
};

export default Slide;
