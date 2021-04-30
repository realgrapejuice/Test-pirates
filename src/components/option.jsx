import React, { useState } from "react";
import styles from "./option.module.css";

const Option = ({ itemData, storeData, zoneData }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState(false);
  const [basicOpen, setBasicOpen] = useState(false);

  const toggleLocation = () => {
    if (!locationOpen) {
      setLocationOpen(true);
      setItemOpen(false);
      setBasicOpen(false);
    } else {
      setLocationOpen(false);
    }
  };

  const toggleItem = () => {
    if (!itemOpen) {
      setLocationOpen(false);
      setItemOpen(true);
      setBasicOpen(false);
    } else {
      setItemOpen(false);
    }
  };

  const toggleBasic = () => {
    if (!basicOpen) {
      setLocationOpen(false);
      setItemOpen(false);
      setBasicOpen(true);
    } else {
      setBasicOpen(false);
    }
  };

  console.log(zoneData);

  const ListItem = () => {
    if (!locationOpen && !itemOpen && !basicOpen) {
      return <ul className="optionList"></ul>;
    }
    if (locationOpen) {
      return (
        <ul className="optionList">
          {zoneData.map((element) => (
            <li key={element.label} className="listItem">
              {element.label}
            </li>
          ))}
        </ul>
      );
    }
    if (itemOpen) {
      return (
        <ul className="optionList">
          {itemData.map((element) => (
            <li key={element.label} className="listItem">
              {element.label}
            </li>
          ))}
        </ul>
      );
    }
    if (basicOpen) {
      return <ul className="optionList"></ul>;
    }
  };

  return (
    <>
      <section className={styles.container}>
        <div
          className={`${locationOpen ? "filter active" : ""}`}
          onClick={toggleLocation}
        >
          <h3 data-name="location">모든 시장</h3>
          <span data-name="location">
            <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div
          className={`${itemOpen ? "filter active" : ""}`}
          onClick={toggleItem}
        >
          <h3 data-name="item">모든 품목</h3>
          <span data-name="item">
            <i className="fas fa-caret-down"></i>
          </span>
        </div>
        <div
          className={`${basicOpen ? "filter active" : ""}`}
          onClick={toggleBasic}
        >
          <h3 data-name="basic">기본 순</h3>
          <span data-name="basic">
            <i className="fas fa-caret-down"></i>
          </span>
        </div>
      </section>
      <ListItem />
    </>
  );
};

export default Option;
