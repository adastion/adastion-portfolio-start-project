import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/Icons/Icon'
import { Picture } from '../../../../components/Picture'
import { SectionTitle } from '../../../../components/SectionTitle'
import { theme } from '../../../../styles/Theme'
import { S } from '../Recommendations_Styles'
import { Text } from './../../../../components/Text'

type CardRecommendationPropsType = {
  nameIcon: string
  title: string
  description: string
  indexCard: number
  dataUser: {
    picture: string[]
    name: string
    profession: string
  }
}

export const CardRecommendation: React.FC<CardRecommendationPropsType> = (
  props: CardRecommendationPropsType
) => {
  return (
    <S.CardRecommendation>
      <S.Rtating>
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
      </S.Rtating>
      <SectionTitle as={'h4'} margin={'18px'} size={'18px'} weight={'500'}>
        {props.title}
      </SectionTitle>
      <Text margin={'30px'} position={'start'}>
        {props.description}
      </Text>
      <FlexWrapper gap={'20px'}>
        <Picture avatar width={'80px'} height={'80px'}>
          <source srcSet={props.dataUser.picture[1]} type='image/webp' />
          <img loading='lazy' src={props.dataUser.picture[0]} alt='avatar' />
        </Picture>
        <FlexWrapper direction={'column'} justify={'center'}>
          <SectionTitle as={'h4'} margin={'5px'} size={'18px'} weight={'500'}>
            {props.dataUser.name}
          </SectionTitle>
          <Text margin={'30px'} position={'start'}>
            {props.dataUser.profession}
          </Text>
        </FlexWrapper>
      </FlexWrapper>
    </S.CardRecommendation>
  )
}
