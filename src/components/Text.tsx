import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

type TextPropsType = {
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  position?: string;
  flex?: boolean;
  margin?: string;
};

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.height || "24px"};
  color: ${theme.colors.secondary || "#000"};
  max-width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.position || "center"};

  & + * {
    margin-top: ${props=>props.margin || "50px"};
  }

  ${(props) =>
    props.flex &&
    css<TextPropsType>`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
    `}
`;
