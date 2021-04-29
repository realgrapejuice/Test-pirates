import { BrowserRouter, Link } from "react-router-dom";
import styles from "./app.module.css";
import Nav from "./components/nav";
import Slide from "./components/slide";

function App({ bannerData, itemData, storeData, zoneData }) {
  return (
    <BrowserRouter>
      <header>
        <div className={styles.head}>
          <Link to="/홈">
            <img src="/images/로고.JPG" alt="인어교주해적단 로고" />
          </Link>
          <button type="button">로그인/가입</button>
        </div>
        <Nav />
      </header>
      <Slide bannerData={bannerData} />
    </BrowserRouter>
  );
}

export default App;
