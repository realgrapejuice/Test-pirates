import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Nav from "./components/nav";

function App() {
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
    </BrowserRouter>
  );
}

export default App;
