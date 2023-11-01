import styled, { css } from 'styled-components'

type ContainerPropsType = {
  wrap?: boolean
}

export const Container = styled.div<ContainerPropsType>`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;

  ${props =>
    props.wrap &&
    css<ContainerPropsType>`
      max-width: 1440px;
    `}
`
