import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Text } from '../../../../components/Text';
import styled from 'styled-components';

type CardPricePropsType = {
  title: string;
  price: string;
  service: string;
  info: string;
}

export const CardPrice = (props: CardPricePropsType) => {
  return (
    <FlexWrapper direction={'column'} align={''}>
      <Ttle>{props.title}</Ttle>
      <Price><span>$</span>{props.price}</Price>
      <Text>{props.info}</Text>
      <ul>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
        <ServiceName>{props.service}</ServiceName>
      </ul>
      <BtnService >ORDER NOW</BtnService>
    </FlexWrapper>
  )
}

const Ttle = styled.h3`
  
`

const Price = styled.p`
  
`

const ServiceName = styled.li`
  
`

const BtnService = styled.a`
  
`