import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

type BtnPropsType = {
  circle?: boolean;
  link?: boolean;
};

export const Btn = styled.button<BtnPropsType>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 10px; */
  background: ${Theme.colors.bg.secondary};
  border-radius: 5px;
  padding: 16px 32px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${Theme.colors.bg.primary};
    
    & svg {
      fill: ${Theme.colors.bg.primary};
    }
  }

  ${props => props.circle &&
    css<BtnPropsType>`
      padding: 5px;
      border-radius: 50%;
  `}
`;
