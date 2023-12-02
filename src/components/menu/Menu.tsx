import React, { useState, useEffect } from 'react'
import { DefaultTheme } from '../../styles/Theme'
import { Button } from '../Button'
import { Icon } from '../Icons/Icon'
import { NavLink } from './../Button'
import { FlexWrapper } from './../FlexWrapper'
import { S } from './Menu_Styles'

const navItemsList = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'services',
    href: 'myServices',
  },
  {
    name: 'cv',
    href: 'cv',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blog',
    href: 'blog',
  },
  {
    name: 'contact',
    href: 'contacts',
  },
]

export const Menu: React.FC = () => {
  const storedTheme = localStorage.getItem('theme')
  const initialTheme: string = storedTheme || 'light'

  const [currentTheme, setCurrentTheme] = useState<string>(initialTheme)

  function toggleTheme() {
    const newTheme: string = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme)
    document.body.classList.add('toggle-theme')
    setTimeout(() => {
      document.body.classList.remove('toggle-theme')
    }, 200)
  }, [currentTheme])

  return (
    <S.Menu>
      <Button
        onClick={toggleTheme}
        circle
        colorBackground={'transparent'}
        notHover={'none'}>
        <Icon iconId={'contrast'} boxWidth='30' boxHeight='30' size={'30px'} />
      </Button>
      <FlexWrapper as={'ul'} direction={'column'} align={'center'}>
        {navItemsList.map(N => (
          <S.NavItem name={N.name}>
            <NavLink
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-20}
              to={N.href}
              colorBackground={DefaultTheme.colors.pageBg}
              circle>
              <Icon
                fill={DefaultTheme.colors.secondary}
                iconId={N.name}
                boxWidth='16'
                boxHeight='16'
                size='16'
              />
            </NavLink>
          </S.NavItem>
        ))}
      </FlexWrapper>
    </S.Menu>
  )
}
