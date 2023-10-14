import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FooterStyled } from "./layout/footer/FooterStyled";
import { Icon } from "./components/Icons/Icon";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FooterStyled>
        <Icon iconId={"copyright"} />
        <small>2021 All Rights Reserved.Ojjomedia</small>
      </FooterStyled>
    </div>
  );
}

export default App;
