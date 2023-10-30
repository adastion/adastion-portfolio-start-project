import React from 'react'
import { theme } from '../../styles/Theme'
import { Button } from '../Button'
import { Icon } from '../Icons/Icon'
import { FlexWrapper } from './../FlexWrapper'
import { S } from './Menu_Styles'

const listNavItem = [
  {
    name: 'home',
  },
  {
    name: 'services',
  },
  {
    name: 'cv',
  },
  {
    name: 'portfolio',
  },
  {
    name: 'blog',
  },
  {
    name: 'contact',
  },
]

export const Menu: React.FC = () => {
  return (
    <S.Menu>
      <Button circle colorBackground={'transparent'} notHover={'none'}>
        <Icon iconId={'contrast'} boxWidth='30' boxHeight='30' size={'30px'} />
      </Button>
      <FlexWrapper as={'ul'} direction={'column'} align={'center'} gap={'44px'}>
        {listNavItem.map(N => (
          <S.NavItem name={N.name}>
            <Button colorBackground={theme.colors.pageBg} as='a' circle>
              <Icon
                fill={theme.colors.secondary}
                iconId={N.name}
                boxWidth='16'
                boxHeight='16'
                size='16'
              />
            </Button>
          </S.NavItem>
        ))}
      </FlexWrapper>
    </S.Menu>
  )
}
