import React from 'react'
import styled from 'styled-components'
import { Brands } from '../section/brands/Brands'
import { Education } from '../section/education/Education'
import { MyServices } from '../section/myServices/MyServices'
import { Portfolio } from '../section/portfolio/Portfolio'
import { PricePlans } from '../section/price/PricePlans'
import { Recommendations } from '../section/recommendations/Recommendations'
import { WorkHistory } from '../section/workHistory/WorkHistory'
import { Blog } from './../section/blog/Blog'
import { Contacts } from './../section/contacts/Contacts'

export const Main: React.FC = () => {
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
      <Brands />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: grid;
  gap: 70px;
`
