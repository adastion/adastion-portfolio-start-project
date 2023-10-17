import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FooterStyled } from "./layout/footer/FooterStyled";
import { Icon } from "./components/Icons/Icon";
import styled from "styled-components";
import { FlexWrapper } from "./components/FlexWrapper";
import { Menu } from "./components/menu/Menu";
import { Profile } from "./layout/header/menu_about_me/Profile";

function App() {
  return (
    <AppStyled className="App">
      <Profile />
      <Header />
      <Main />
      <FooterStyled>
        <Icon iconId={"copyright"} />
        <small>2021 All Rights Reserved.Ojjomedia</small>
      </FooterStyled>
      <Menu />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  background: #f0f0f6;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;
