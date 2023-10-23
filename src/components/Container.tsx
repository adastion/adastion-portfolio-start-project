import styled, { css } from 'styled-components'

type ContainerPropsType = {
  main?: boolean
}

export const Container = styled.div<ContainerPropsType>`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;

  ${props =>
    props.main &&
    css<ContainerPropsType>`
      max-width: 1440px;
    `}
`
