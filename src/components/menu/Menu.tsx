import React from 'react'
import { ProfilePropsType } from '../../layout/sideBar/SideBar'
import { theme } from '../../styles/Theme'
import { Button } from '../Button'
import { Icon } from '../Icons/Icon'
import { FlexWrapper } from './../FlexWrapper'
import { S } from './Menu_Styles'

const navItemsList = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'services',
    href: 'myServices',
  },
  {
    name: 'cv',
    href: 'cv',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blog',
    href: 'blog',
  },
  {
    name: 'contact',
    href: 'contacts',
  },
]

export const Menu: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
  return (
    <S.Menu>
      <Button circle colorBackground={'transparent'} notHover={'none'}>
        <Icon iconId={'contrast'} boxWidth='30' boxHeight='30' size={'30px'} />
      </Button>
      <FlexWrapper as={'ul'} direction={'column'} align={'center'}>
        {navItemsList.map(N => (
          <S.NavItem name={N.name}>
            <Button
              onClick={N.name === 'cv' ? ()=> {props.setActive(true)}: undefined}
              href={`#${N.href}`}
              colorBackground={theme.colors.pageBg}
              as='a'
              circle>
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
