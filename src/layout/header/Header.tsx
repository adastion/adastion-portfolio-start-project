import React from "react";
import { Menu } from "../../components/menu/Menu";
import { MenuAboutMe } from "../../components/MenuAboutMe/MenuAboutMe";
import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <MenuAboutMe/>
      <div>main card me</div>
      <Menu/>
    </StyledHeader>
  );
}


const StyledHeader = styled.header`
  width: 100%;
  height: 600px;
  background: #6e8ea2;
`
