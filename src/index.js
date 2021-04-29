import "./index.css";
import App from "./app";
import bannerData from "./data/bannerData.json";
import itemData from "./data/itemData.json";
import storeData from "./data/storeData.json";
import React from "react";
import ReactDOM from "react-dom";
import zoneData from "./data/zoneData.json";

const json = {
  bannerData,
  itemData,
  storeData,
  zoneData,
};

ReactDOM.render(
  <React.StrictMode>
    <App json={json} />
  </React.StrictMode>,
  document.getElementById("root")
);
