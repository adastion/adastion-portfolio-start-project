import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { Icon } from '../../../components/Icons/Icon'
import { DefaultTheme } from '../../../styles/Theme'

export const Brands: React.FC = () => {
  return (
    <BrandsWrap>
      <Container>
        <ul>
          <li>
            <Icon iconId={'logoPetroleum'} size={'140px'} fill={DefaultTheme.colors.secondary} />
          </li>
          <li>
            <Icon iconId={'logoStation'} size={'140px'} fill={DefaultTheme.colors.secondary} />
          </li>
          <li>
            <Icon iconId={'logoQuality'} size={'140px'} fill={DefaultTheme.colors.secondary} />
          </li>
          <li>
            <Icon
              iconId={'logoStationTwo'}
              size={'140px'}
              fill={DefaultTheme.colors.secondary}
            />
          </li>
        </ul>
      </Container>
    </BrandsWrap>
  )
}

const BrandsWrap = styled.div`
  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    justify-items: center;
    gap: 20px;
  }
`
