import React from 'react'
import { MyServices } from '../section/my_services/MyServices'
import { PricePlans } from '../section/price/PricePlans'
import { Recommendations } from '../section/recommendations/Recommendations'
import { Education } from './../section/education/Education'
import { WorkHistory } from './../section/work_history/WorkHistory'
import { Portfolio } from '../section/portfolio/Portfolio'
import { Blog } from './../section/blog/Blog'
import { Contacts } from './../section/contacts/Contacts'
import styled from 'styled-components'

export const Main = () => {
  return (
    <MainStyled>
      <MyServices />
      <PricePlans />
      <Recommendations />
      <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <Contacts />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: grid;
  gap: 70px;
`
