import styled, { css } from "styled-components";
import { Theme } from "../styles/Theme";

type ButtonPropsType = {
  circle?: boolean;
  link?: boolean;
  colorBackground?: string;
  padding?: string;
  width?: string;
  height?: string;
};

export const Button = styled.button<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.colorBackground || Theme.colors.bg.secondary};
  border-radius: 5px;
  padding: ${(props) => props.padding || "16px 32px"};
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${Theme.colors.bg.primary};

    & svg {
      fill: ${Theme.colors.bg.primary};
    }
  }

  ${(props) =>
    props.circle &&
    css<ButtonPropsType>`
      padding: ${(props) => props.padding || "5px"};
      border-radius: 50%;
      width: ${(props) => props.width || "40px"};
      height: ${(props) => props.height || "40px"};

      &:hover {
        background: ${Theme.colors.bg.secondary};

        svg {
          fill: ${Theme.colors.primary};
        }
      }
    `}
`;