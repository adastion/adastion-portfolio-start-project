import React, { useState } from 'react'
import { S } from './App_Styles'
import { FlexWrapper } from './components/FlexWrapper'
import { Menu } from './components/menu/Menu'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Main } from './layout/main/Main'
import { Profile } from './layout/sideBar/SideBar'

export const App: React.FC = () => {
  const [currentActive, setCurrentActive] = useState(false)

  return (
    <S.App className='App'>
      <Profile active={currentActive} setActive={setCurrentActive} />
      <FlexWrapper direction={'column'}>
        <Header active={currentActive} setActive={setCurrentActive} />
        <Main />
        <Footer />
      </FlexWrapper>
      <Menu />
    </S.App>
  )
}
