import styled from 'styled-components'

type SectionTitlePropsType = {
  size?: string
  weight?: string
  transform?: boolean
  margin?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  font-size: ${props => props.size || '32px'};
  font-weight: ${props => props.weight || '700'};
  line-height: 123.6%;
  text-transform: ${props => (props.transform ? 'none' : 'capitalize')};

  &::first-letter {
    text-transform: uppercase;
  }

  & + * {
    margin-top: ${props => props.margin || '25px'};
  }
`
