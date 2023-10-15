import React from "react";
import sprite from "./../../assets/images/icons-sprite.svg";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type IconPropsType = {
  iconId: string;
  size?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      fill={`${props.fill || Theme.colors.primary || "black"}`}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "40px"}
      height={props.size || "40px"}
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  /* width: 70px; */

`;
