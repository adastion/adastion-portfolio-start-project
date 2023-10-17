import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

type TextPropsType = {
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  position?: string;
  flex?: boolean;
};

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.height || "24px"};
  color: ${Theme.colors.secondary || "#000"};
  max-width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.position || "center"};

  & + * {
    margin-top: 50px;
  }

  ${(props) =>
    props.flex &&
    css<TextPropsType>`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
    `}
`;
