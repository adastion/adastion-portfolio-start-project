import React from 'react'
import sprite from './../../assets/images/icons-sprite.svg'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type IconPropsType = {
  iconId: string
  size?: string
  fill?: string
  boxWidth?: string
  boxHeight?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill={`${props.fill || theme.colors.primary || 'black'}`}
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || '40px'}
      height={props.size || '40px'}
      viewBox={`0 0 ${props.boxWidth} ${props.boxHeight}` || '0 0 18 18'}>
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  )
}
