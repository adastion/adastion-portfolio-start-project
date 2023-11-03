import React from 'react'
import { Container } from './../../components/Container'
import { S } from './Header_Styles'
import { Banner } from './banner/Banner'

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <Banner />
      </Container>
    </S.Header>
  )
}
