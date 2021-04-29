import styles from "./app.module.css";
import Nav from "./components/nav";

function App() {
  return (
    <header>
      <div className={styles.head}>
        <a href="/홈">
          <img src="#" alt="인어교주해적단 로고" />
        </a>
        <button type="button">로그인/가입</button>
      </div>
      <Nav />
    </header>
  );
}

export default App;
