import React from 'react'
import { S } from './InfoCellProgress_Styles'
import { Text } from '../../../../components/Text'
import { SectionTitle } from '../../../../components/SectionTitle'
import { FlexWrapper } from '../../../../components/FlexWrapper'

type ProgressBarPropsType = {
  name: string
  percent: number
}

export const InfoCellProgress: React.FC<ProgressBarPropsType> = (
  props: ProgressBarPropsType
) => {
  return (
    <S.InfoCell>
      <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
        Languages
      </SectionTitle>
      <FlexWrapper as={'ul'} direction={'column'} justify={'space-between'} gap={'10px'}>
        <S.ProgressBar percent={props.percent}>
          <Text margin={'0'} as={'span'}>
            {props.name}
          </Text>
          <Text margin={'0'} as={'span'}>
            {props.percent}%
          </Text>
        </S.ProgressBar>
      </FlexWrapper>
    </S.InfoCell>
  )
}
