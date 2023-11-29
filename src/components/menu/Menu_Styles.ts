import styled from 'styled-components'
import { DefaultTheme } from '../../styles/Theme'

type NavItemPropsType = {
  name: string
}

const Menu = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px 0;
  background: ${DefaultTheme.colors.primaryBg};
  padding: 50px 0;
  height: 100%;

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 44px;
    padding: 0 34px;
    overflow-y: auto;
    height: 100vh;
  }

  @media ${DefaultTheme.media.bigDesktop} {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 5px;
    height: auto;
    flex-direction: row;
    justify-content: center;
    gap: 25px;

    & ul {
      margin: 0;
      flex-direction: row;
      justify-content: center;
      padding: 0;
      gap: 20px;
      height: auto;
    }
  }

  @media ${DefaultTheme.media.tablet} {
    & ul {
      gap: 10px;
    }
  }
`

const NavItem = styled.li<NavItemPropsType>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    &::before,
    &::after {
      transform: scale(1);
    }
  }

  &::before,
  &::after {
    display: inline-block;

    content: '';
    position: absolute;
    background: ${DefaultTheme.colors.primary};
    color: ${DefaultTheme.colors.primaryBg};
    transform: scale(0);
  }

  &::before {
    content: attr(name);
    top: -42px;
    max-width: 120px;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    padding: 6px;
    z-index: 1;
    text-transform: capitalize;
  }

  &::after {
    top: -24px;
    width: 18px;
    height: 18px;
    clip-path: polygon(100% 0, 0 0, 50% 100%);
    z-index: 0;
  }
`

export const S = {
  Menu,
  NavItem,
}
