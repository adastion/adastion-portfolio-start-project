import styled, { css } from 'styled-components'
import { DefaultTheme } from '../styles/Theme'

type PicturePropsType = {
  width?: string
  height?: string
  avatar?: boolean
  status?: string
}

export const Picture = styled.picture<PicturePropsType>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.width || 'auto'};
  overflow: hidden;

  & > * {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }

  ${props =>
    props.avatar &&
    css<PicturePropsType>`
      border-radius: 50%;
    `}

  ${props =>
    props.status &&
    css<PicturePropsType>`
      position: relative;
      z-index: 0;
      overflow: visible;

      & img {
        overflow: hidden;
        border-radius: 50%;
      }

      &::after {
        content: '';
        position: absolute;
        right: 10px;
        bottom: 18px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props =>
          props.status === 'active'
            ? DefaultTheme.colors.onlineUser
            : DefaultTheme.colors.secondary || 'gray'};
        z-index: 3;
      }
    `}
`
