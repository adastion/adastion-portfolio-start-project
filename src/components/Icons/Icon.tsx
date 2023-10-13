import React from "react";
import sprite from "./../../assets/images/icons-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      fill={`${props.fill || "black"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  width: 70px;
`;
