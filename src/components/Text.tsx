import styled from "styled-components";
import { Theme } from "../styles/Theme";

type TextPropsType = {
  size?: string;
  weight?: string;
  height?: string;
};

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.height || "24px"};
  color: ${Theme.colors.secondary || "#000"};
`;
