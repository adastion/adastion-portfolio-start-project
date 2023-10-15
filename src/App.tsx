import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FooterStyled } from "./layout/footer/FooterStyled";
import { Icon } from "./components/Icons/Icon";
import styled from "styled-components";

function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Main />
      <FooterStyled>
        <Icon iconId={"copyright"} />
        <small>2021 All Rights Reserved.Ojjomedia</small>
      </FooterStyled>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background: #F0F0F6;
`;
