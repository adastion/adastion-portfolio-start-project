import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type NavItemPropsType = {
  name: string
}

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.primaryBg};
  padding: 50px 34px 0;
  height: 100%;

  & ul {
    margin: 174px 0;
  }

  @media ${theme.media.bigDesktop} {
    position: absolute;
    left: -110vw;
  }
`

const NavItem = styled.li<NavItemPropsType>`
  width: 65px;
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