import React from 'react'
import { Button } from '../../../../components/Button'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/Icons/Icon'
import { SectionTitle } from '../../../../components/SectionTitle'
import { S } from '../Contacts_Styles'

type CardContactsPropsType = {
  icon: string
  nameCard: {
    title: string
    info: string
  }[]
}

export const CardContacts: React.FC<CardContactsPropsType> = (
  props: CardContactsPropsType
) => {
  return (
    <S.CardContacts>
      <Button as={'div'} circle>
        <Icon iconId={props.icon} boxWidth={'18px'} boxHeight={'18px'} size={'18'} />
      </Button>
      <FlexWrapper direction={'column'} gap={'18px'}>
        {props.nameCard.map((N, index) => (
          <li key={index}>
            <SectionTitle as={'span'} size={'18px'} weight={'500'} margin={'0'}>
              {N.title}
            </SectionTitle>
            <span>{N.info}</span>
          </li>
        ))}
      </FlexWrapper>
    </S.CardContacts>
  )
}
