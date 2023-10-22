import styled from 'styled-components'

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gap?: string
  padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  height: 100%;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'strech'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
  padding: ${props => props.padding || '0'};
`
