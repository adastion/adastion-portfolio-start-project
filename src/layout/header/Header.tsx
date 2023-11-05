import React from 'react'
import { ProfilePropsType } from '../sideBar/SideBar'
import { Container } from './../../components/Container'
import { S } from './Header_Styles'
import { Banner } from './banner/Banner'

export const Header: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
  return (
    <S.Header id={'home'}>
      <Container>
        <Banner active={props.active} setActive={props.setActive} />
      </Container>
    </S.Header>
  )
}
