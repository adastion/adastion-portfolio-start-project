import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'

type BurgerButtonPropsType = {
  close?: boolean
}

export const BurgerButton = styled.button<BurgerButtonPropsType>`
  position: relative;
  top: 35px;
  left: 30px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: none;
  z-index: 2;

  & span {
    display: inline-block;
    width: 100%;
    height: 2px;
    background: ${theme.colors.secondaryBg};
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${theme.colors.secondaryBg};
    transition: all 0.1s ease-in;
    z-index: 5;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  ${props =>
    props.close &&
    css<BurgerButtonPropsType>`
      & span {
        opacity: 0;
      }

      &::before {
        transform: rotate(45deg) translateY(0);
        transform-origin: center;
      }

      &::after {
        transform: rotate(-45deg) translateY(0);
        transform-origin: cenetr;
      }
    `}

  @media ${theme.media.bigDesktop} {
    display: flex;
  }

  @media ${theme.media.desktop} {
    & + * {
      margin-top: 45px;
    }
  }
`
