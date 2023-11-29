import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { Icon } from '../../../components/Icons/Icon'
import { DefaultTheme } from '../../../styles/Theme'

type SocialNetworkPropsType = {
  name: string
}

export const SocialNetwork: React.FC<SocialNetworkPropsType> = (
  props: SocialNetworkPropsType
) => {
  return (
    <SocialNetworkItem>
      <Button width={'24px'} circle>
        <Icon size={'14px'} iconId={props.name} />
      </Button>
    </SocialNetworkItem>
  )
}

const SocialNetworkItem = styled.li`
  ${Button} {
    & svg {
      &:hover,
      &:focus-visible {
        fill: ${DefaultTheme.colors.primaryBg};
      }
    }
  }
`
