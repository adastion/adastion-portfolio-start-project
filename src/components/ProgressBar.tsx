import styled from "styled-components";
import { theme } from "../styles/theme";

type ProgressBarPropsType = {
  percent: string;
}

export const ProgressBar = styled.li<ProgressBarPropsType>`
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 3px;
    width: 100%;
    left: 0;
    right: 0;
  }

  &::before {
    bottom: -5px;
    height: 4px;
    border: 0.5px solid ${theme.colors.secondaryBg};
  }

  &::after {
    bottom: -4px;
    left: 1px;
    width: calc(${props=>props.percent || '1'}% - 1%);
    height: 2px;
    background: ${theme.colors.secondaryBg};
    border-radius: 3px;
  }
`;
