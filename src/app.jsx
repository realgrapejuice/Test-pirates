import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";

import Slide from "./components/slide";
import Option from "./components/option";

function App({ bannerData, itemData, storeData, zoneData }) {
  return (
    <BrowserRouter>
      <Header />
      <Slide bannerData={bannerData} />
      <Route exact path="/홈"></Route>
      <Route path="/시장">
        <Option itemData={itemData} storeData={storeData} zoneData={zoneData} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
