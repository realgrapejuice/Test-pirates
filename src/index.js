import "./index.css";
import App from "./app";
import { bannerData, itemData, storeData, zoneData } from "./data/demo_data";
import React from "react";
import ReactDOM from "react-dom";
console.log(bannerData);

ReactDOM.render(
  <React.StrictMode>
    <App
      bannerData={bannerData}
      itemData={itemData}
      storeData={storeData}
      zoneData={zoneData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
