import { theme } from '../../styles/Theme'
import sprite from './../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  size?: string
  fill?: string
  boxWidth?: string
  boxHeight?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      fill={`${props.fill || theme.colors.primary}`}
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || '40px'}
      height={props.size || '40px'}
      viewBox={`0 0 ${props.boxWidth} ${props.boxHeight}` || '0 0 18 18'}>
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  )
}
