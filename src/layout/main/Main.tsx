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
import { FlexWrapper } from './../../components/FlexWrapper'
import { Icon } from '../../components/Icons/Icon'
import { Container } from './../../components/Container'
import { theme } from '../../styles/Theme'

export const Main = () => {
  return (
    <MainStyled>
      <MyServices />
      <PricePlans />
      <Recommendations />
      {/* <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <Contacts />
      <Container>
        <FlexWrapper
          as={'ul'}
          justify={'space-between'}
          gap={theme.gapCard}
          wrap={'wrap'}>
          <li>
            <Icon iconId={'logoPetroleum'} size={'140px'} fill={theme.colors.secondary} />
          </li>
          <li>
            <Icon iconId={'logoStation'} size={'140px'} fill={theme.colors.secondary} />
          </li>
          <li>
            <Icon iconId={'logoQuality'} size={'140px'} fill={theme.colors.secondary} />
          </li>
          <li>
            <Icon
              iconId={'logoStationTwo'}
              size={'140px'}
              fill={theme.colors.secondary}
            />
          </li>
        </FlexWrapper>
      </Container> */}
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: grid;
  gap: 70px;
`
