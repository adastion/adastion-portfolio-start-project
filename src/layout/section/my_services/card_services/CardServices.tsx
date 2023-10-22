import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/Icons/Icon'
import { Text } from '../../../../components/Text'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { SectionTitle } from './../../../../components/SectionTitle'
import { Button } from '../../../../components/Button'

type CardServicesPropsType = {
  iconCard: string
  name: string
  description: string
  addBtn?: string
}

export const CardServices = (props: CardServicesPropsType) => {
  return (
    <CardServicesStyled>
      <FlexWrapper direction={'column'} align={'center'} padding={'25px'}>
        {props.iconCard !== '' ? (
          <Icon size='74px' iconId={props.iconCard} fill={theme.colors.secondaryBg} />
        ) : (
          ''
        )}
        <SectionTitle as={'h3'} size={'18px'} weight={'500'} margin='15px'>
          {props.name}
        </SectionTitle>
        <Text margin={'0'}>{props.description}</Text>
        <Button as={'a'} asLink>
          {props.addBtn}
        </Button>
      </FlexWrapper>
    </CardServicesStyled>
  )
}

const CardServicesStyled = styled.div`
  background: ${theme.colors.primaryBg};
  width: 100%;
  height: 100%;

  & svg + * {
    margin-top: 25px;
  }

  & a:empty {
    display: none;
  }
`
