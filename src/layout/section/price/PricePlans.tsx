import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from './../../../components/Text'
import { FlexWrapper } from './../../../components/FlexWrapper'
import { CardPrice } from './card_price/CardPrice'
import { theme } from '../../../styles/Theme'
import styled from 'styled-components'
import { Container } from './../../../components/Container'

const listServices = [
  'UI Design',
  'web development',
  'logo design',
  'seo optimization',
  'wordPress integration',
  '5 Websites',
  'unlimited user',
  '20 gB bandwith',
]

export const PricePlans = () => {
  return (
    <PricePlansStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Price plans</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper wrap={'wrap'} gap={theme.gapCard}>
            <CardPrice
              title={'silver'}
              price={'0.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
            />
            <CardPrice
              title={'gold'}
              price={'50.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
              popularActive
            />
            <CardPrice
              title={'dimond'}
              price={'80.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </PricePlansStyled>
  )
}

const PricePlansStyled = styled.section``
