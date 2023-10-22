import React from 'react'
import { Icon } from '../Icons/Icon'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Button } from '../Button'
import { FlexWrapper } from './../FlexWrapper'

export const Menu = () => {
  return (
    <MenuStyled>
      <Button circle colorBackground={'transparent'} notHover={'none'}>
        <Icon iconId={'contrast'} boxWidth='30' boxHeight='30' size={'30px'} />
      </Button>
      <FlexWrapper as={'ul'} direction={'column'} align={'center'} gap={'44px'}>
        <NavItem name={'Home'}>
          <Button padding={'10px'} colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon fill={theme.colors.secondary} iconId={'home'} boxWidth='16' boxHeight='16' />
          </Button>
        </NavItem>
        <NavItem name={'services'}>
          <Button padding={'10px'} colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon fill={theme.colors.secondary} iconId={'services'} boxWidth='16' boxHeight='16' />
          </Button>
        </NavItem>
        <NavItem name={'cv'}>
          <Button padding={'10px'} colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon fill={theme.colors.secondary} iconId={'cv'} boxWidth='16' boxHeight='16' />
          </Button>
        </NavItem>
        <NavItem name={'portfolio'}>
          <Button padding={'10px'} colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon fill={theme.colors.secondary} iconId={'portfolio'} boxWidth='16' boxHeight='16' />
          </Button>
        </NavItem>
        <NavItem name={'blog'}>
          <Button padding={'10px'} colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon fill={theme.colors.secondary} iconId={'blog'} boxWidth='16' boxHeight='16' />
          </Button>
        </NavItem>
        <NavItem name={'contact'}>
          <Button colorBackground={theme.colors.pageBg} as='a' circle>
            <Icon
              fill={theme.colors.secondary}
              iconId={'contact'}
              boxWidth='16'
              boxHeight='16'
              size='16'
            />
          </Button>
        </NavItem>
      </FlexWrapper>
    </MenuStyled>
  )
}

const MenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.primaryBg};
  padding: 50px 34px 0;
  height: 100vh;

  & ul {
    margin: 174px 0;
  }
`

type NavItemPropsType = {
  name: string
}

const NavItem = styled.li<NavItemPropsType>`
  width: 65px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::before,
  &::after {
    transition: all .3s;
    content: '';
    position: absolute;
    background: ${theme.colors.primary};
    transform: scale(0);
  }

  &::before {
    content: attr(name);
    top: -42px;
    width: 100%;
    font-size: 12px;
    text-align: center;
    color: ${theme.colors.primaryBg};
    border-radius: 2px;
    padding: 6px;
    z-index: 1;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &::after {
    top: -24px;
    width: 18px;
    height: 18px;
    clip-path: polygon(100% 0, 0 0, 50% 100%);
    z-index: 0;
  }

  &:hover {
    &::before,
    &::after {
      transform: scale(1);
    }
  }
`
