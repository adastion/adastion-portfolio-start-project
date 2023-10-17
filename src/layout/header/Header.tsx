import React from "react";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { Banner } from "./banner/Banner";
import { Profile } from "./menu_about_me/Profile";

export function Header() {
  return (
    <StyledHeader>
      {/* <Profile /> */}
      <Banner />
      {/* <Menu /> */}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  gap: 30px;
`;
