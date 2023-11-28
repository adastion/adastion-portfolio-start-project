import React from 'react'
import { Button } from '../../../../components/Button'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/Icons/Icon'
import { Text } from '../../../../components/Text'
import { DefaultTheme } from '../../../../styles/Theme'
import { SectionTitle } from './../../../../components/SectionTitle'
import { S } from '../MyServices_Styles'

type CardServicesPropsType = {
  iconCard: string
  name: string
  description: string
  addBtn?: string
}

export const CardServices: React.FC<CardServicesPropsType> = (
  props: CardServicesPropsType
) => {
  return (
    <S.CardServices>
      <FlexWrapper direction={'column'} align={'center'} padding={'30px 25px 25px'}>
        {props.iconCard !== '' ? (
          <Icon size='74px' iconId={props.iconCard} fill={DefaultTheme.colors.secondaryBg} />
        ) : (
          ''
        )}
        <SectionTitle as={'h3'} size={'18px'} weight={'500'} margin='15px'>
          {props.name}
        </SectionTitle>
        <Text margin={'12px'}>{props.description}</Text>
        <Button as={'a'} asLink padding={'0'}>
          {props.addBtn}
        </Button>
      </FlexWrapper>
    </S.CardServices>
  )
}
