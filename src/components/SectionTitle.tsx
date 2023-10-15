import styled from "styled-components";

type SectionTitlePropsType = {
  size?: string;
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  font-size: ${props => props.size || '32px'};
  font-weight: 700;
  line-height: 123.6%;
  
`;
