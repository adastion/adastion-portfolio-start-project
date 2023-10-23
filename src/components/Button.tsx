import styled, { css } from 'styled-components'
import { theme } from '../styles/Theme'

type ButtonPropsType = {
  circle?: boolean
  asLink?: boolean
  sideBar?: boolean
  btnPrice?: boolean
  colorBackground?: string
  padding?: string
  width?: string
  height?: string
  font?: string
  notHover?: string
}

export const Button = styled.button<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.colorBackground || theme.colors.secondaryBg};
  border-radius: 5px;
  padding: ${props => props.padding || '16px 32px'};
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${props => props.font || '16px'};
  cursor: pointer;

  & > span {
    margin-right: 10px;
  }

  &:hover {
    color: ${theme.colors.primaryBg};

    & svg {
      fill: ${theme.colors.primaryBg};
    }
  }

  ${props =>
    props.circle &&
    css<ButtonPropsType>`
      padding: ${props => props.padding || '5px'};
      border-radius: 50%;
      width: ${props => props.width || '40px'};
      height: ${props => props.width || '40px'};

      &:hover {
        background: ${theme.colors.secondaryBg};
        background: ${props => (props.notHover ? 'none' : theme.colors.secondaryBg)};

        svg {
          fill: ${theme.colors.primary};
        }
      }
    `}

  ${props =>
    props.sideBar &&
    css<ButtonPropsType>`
      border-radius: unset;
    `}

  ${props =>
    props.asLink &&
    css<ButtonPropsType>`
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 12px;
      background: unset;
      color: ${theme.colors.secondaryBg};

      &:hover {
        color: ${theme.colors.secondaryBg};
        opacity: 0.7;
      }
    `}

    ${props =>
    props.btnPrice &&
    css<ButtonPropsType>`
      padding: 10px 41px;
      height: 38px;
      border-radius: 19px;
      background: ${theme.colors.primaryBg || 'white'};
      box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: 700;

      &:hover {
        color: ${theme.colors.secondary};
      }
    `}
`
