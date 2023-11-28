import React, { useState } from 'react'
import { S } from './App_Styles'
import { FlexWrapper } from './components/FlexWrapper'
import { Menu } from './components/menu/Menu'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Main } from './layout/main/Main'
import { Profile } from './layout/sideBar/SideBar'
import { DefaultTheme } from './styles/Theme'

export const App: React.FC = () => {
  const [currentActive, setCurrentActive] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme.light)

  
  function switchTheme () {
    setCurrentTheme(currentTheme !== DefaultTheme.light ? DefaultTheme.light : DefaultTheme.dark)
  }



console.log(currentTheme === DefaultTheme.light)

  return (
    <S.App className='App'>

      <button onClick={switchTheme} style={{background: 'red', color: 'white', cursor: 'pointer'}}>button</button>
      <h1  style={{ color: currentTheme.secondaryBg}}>HellloooooooO!!!!</h1>
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
