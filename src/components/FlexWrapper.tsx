import styled from "styled-components"

type FlexWrapperPropsType = {
  derection?: string;
  justify?: string;
  align?: string;
  wrap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.derection || 'row'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};

`