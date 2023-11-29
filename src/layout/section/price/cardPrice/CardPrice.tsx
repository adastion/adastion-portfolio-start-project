import { Button } from '../../../../components/Button'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Text } from '../../../../components/Text'
import { DefaultTheme } from '../../../../styles/Theme'
import { S } from '../PricePlans_Styles'
import { Icon } from './../../../../components/Icons/Icon'

type CardPricePropsType = {
  title: string
  price: number
  info: string
  popularActive?: boolean
  services: Array<{
    checked: boolean
    service: string
  }>
}

export const CardPrice = (props: CardPricePropsType) => {
  return (
    <S.CardPrice popular={props.popularActive}>
      <SectionTitle as={'h3'} size={'24px'} margin={'20px'}>
        {props.title}
      </SectionTitle>
      <SectionTitle margin={'8px'}>
        <span>$</span>
        {props.price}.00
        <small> /hour</small>
      </SectionTitle>
      <Text margin={'20px'}>{props.info}</Text>
      <FlexWrapper direction={'column'}>
        <FlexWrapper as={'ul'} direction='column' align={'start'}>
          {props.services.map((S, index) => (
            <li>
              <Icon
                iconId={S.checked ? 'check' : 'close'}
                fill={S.checked ? DefaultTheme.colors.secondaryBg : DefaultTheme.colors.secondary}
                key={index}
              />
              <span className={S.checked ? 'activeColor' : ''}>{S.service}</span>
            </li>
          ))}
        </FlexWrapper>
        <Button as={'a'} btnPrice>
          ORDER NOW
        </Button>
      </FlexWrapper>
    </S.CardPrice>
  )
}
