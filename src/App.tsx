import styled from 'styled-components'
import { Container } from './components/Container'
import { FooterStyled } from './components/FooterStyled'
import { Icon } from './components/Icons/Icon'
import { Menu } from './components/menu/Menu'
import { Header } from './layout/header/Header'
import { Profile } from './layout/header/menuAboutMe/Profile'
import { Main } from './layout/main/Main'
import { theme } from './styles/Theme'
import { FlexWrapper } from './components/FlexWrapper'

function App() {
  return (
    <AppStyled className='App'>
      <Profile />
      <FlexWrapper direction={'column'}>
        <Header />
        <Main />
        <Container>
          <FooterStyled>
            <Icon size={'24px'} iconId={'copyright'} />
            <small>2021 All Rights Reserved.Ojjomedia</small>
          </FooterStyled>
        </Container>
      </FlexWrapper>

      <Menu />
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  min-width: 375px;
  background: ${theme.colors.pageBg};
  display: flex;
  justify-content: center;
  gap: 15px;
`
