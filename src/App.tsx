import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FooterStyled } from "./layout/footer/FooterStyled";
import { Icon } from "./components/Icons/Icon";
import styled from "styled-components";
import { Menu } from "./components/menu/Menu";
import { Profile } from "./layout/header/menu_about_me/Profile";
import { Container } from "./components/Container";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <AppStyled className="App">
      <Profile />
      <Container main>
        <Header />
        <Main />
        <Container>
          <FooterStyled>
            <Icon iconId={"copyright"} />
            <small>2021 All Rights Reserved.Ojjomedia</small>
          </FooterStyled>
        </Container>
      </Container>
      <Menu />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  background: ${Theme.colors.pageBg};
  display: flex;
  gap: 15px;
`;
