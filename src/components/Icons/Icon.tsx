import React from 'react'
import sprite from './../../assets/images/icons-sprite.svg'


type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  fill?: string;
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={`${props.width || '18'}`}
         height={`${props.height || '18'}`} 
         viewBox={`${props.viewBox || "0 0 18 18"}`} 
         fill={`${props.fill || 'black'}`} xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${sprite}#${props.iconId}`}/>
    </svg>
  )
}
