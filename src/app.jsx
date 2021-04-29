import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Nav from "./components/nav";
import Slide from "./components/slide";

function App(json) {
  const bannerData = json.json.bannerData;
  const itemData = json.json.itemData;
  const storeData = json.json.storeData;
  const zoneData = json.json.zoneData;
  return (
    <BrowserRouter>
      <header>
        <div className={styles.head}>
          <a href="/홈">
            <img src="logo.png" alt="인어교주해적단 로고" />
          </a>
          <button type="button">로그인/가입</button>
        </div>
        <Nav />
      </header>
      <Slide bannerData={bannerData} />
    </BrowserRouter>
  );
}

export default App;
