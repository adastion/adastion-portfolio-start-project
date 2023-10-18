import React from "react";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { Banner } from "./banner/Banner";
import { Profile } from "./menu_about_me/Profile";
import { Conatiner } from "./../../components/Container";

export function Header() {
  return (
    <StyledHeader>
      <Conatiner>
        {/* <Profile /> */}
        <Banner />
        {/* <Menu /> */}
      </Conatiner>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  gap: 30px;
`;
