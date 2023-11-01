import React from 'react'
import styled from 'styled-components'
import { Brands } from '../section/brands/Brands'
import { MyServices } from '../section/my_services/MyServices'
import { Portfolio } from '../section/portfolio/Portfolio'
import { PricePlans } from '../section/price/PricePlans'
import { Recommendations } from '../section/recommendations/Recommendations'
import { WorkHistory } from '../section/work_history/WorkHistory'
import { Blog } from './../section/blog/Blog'
import { Contacts } from './../section/contacts/Contacts'
import { Education } from '../section/my_services/education/Education'

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
