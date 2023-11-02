import React from 'react'
import { S } from '../SideBar_Styles'
import { Text } from '../../../components/Text'

type ProgressBarPropsType = {
  name: string
  percent: number
}

export const ProgressBar: React.FC<ProgressBarPropsType> = (props: ProgressBarPropsType) => {
  return (
    <S.ProgressBar percent={props.percent}>
      <Text margin={'0'} as={'span'}>
        {props.name}
      </Text>
      <Text margin={'0'} as={'span'}>
        {props.percent}%
      </Text>
    </S.ProgressBar>
  )
}
