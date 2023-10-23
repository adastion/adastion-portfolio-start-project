import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../styles/Theme'

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

      &::after {
        content: '';
        position: absolute;
        right: 18px;
        bottom: 18px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props =>
          props.status === 'active'
            ? theme.colors.onlineUser
            : theme.colors.secondary || 'gray'};
        z-index: 3;
      }
    `}
`
