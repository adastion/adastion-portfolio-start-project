import styled from 'styled-components'
import { FlexWrapper } from './components/FlexWrapper'
import { Menu } from './components/menu/Menu'
import { Header } from './layout/header/Header'
import { Profile } from './layout/sideBar/SideBar'
import { theme } from './styles/Theme'
import { Footer } from './layout/footer/Footer'
import { Main } from './layout/main/Main'
import { useState } from 'react'
import { BurgerButton } from './components/menu/BurgerButton'

export const App: React.FC = () => {

  const [isOpenCurrent, setIsOpen] = useState(true)
  let openClose = () => {
    setIsOpen(!isOpenCurrent)
  }
  return (
    <AppStyled className='App'>
       <BurgerButton close onClick={openClose}>
          <span></span>
        </BurgerButton>
      <Profile isOpen={isOpenCurrent}/>
      <FlexWrapper direction={'column'}>
        <Header />
        <Main />
        <Footer />
      </FlexWrapper>
      <Menu />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  min-height: 100%;
  min-width: 375px;
  background: ${theme.colors.pageBg};
  display: flex;
  justify-content: center;
  gap: 15px;
  position: relative;

  @media ${theme.media.bigDesktop} {
    margin-bottom: 180px;
  }

  @media ${theme.media.desktop} {
    padding: 0 15px;
  }
`
