import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

type ButtonPropsType = {
  circle?: boolean;
  sideBar?: boolean;
  colorBackground?: string;
  padding?: string;
  width?: string;
  height?: string;
  font?: string;
};

export const Button = styled.button<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.colorBackground || theme.colors.secondaryBg};
  border-radius: 5px;
  padding: ${(props) => props.padding || "16px 32px"};
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${(props) => props.font || "16px"};
  cursor: pointer;

  & > span {
    margin-right: 10px;
  }

  &:hover {
    color: ${theme.colors.primaryBg};

    & svg {
      fill: ${theme.colors.primaryBg};
    }
  }

  ${(props) =>
    props.circle &&
    css<ButtonPropsType>`
      padding: ${(props) => props.padding || "5px"};
      border-radius: 50%;
      width: ${(props) => props.width || "40px"};
      height: ${(props) => props.width || "40px"};

      &:hover {
        background: ${theme.colors.secondaryBg};

        svg {
          fill: ${theme.colors.primary};
        }
      }
    `}

  ${(props) =>
    props.sideBar &&
    css<ButtonPropsType>`
      border-radius: unset;
    `}
`;
