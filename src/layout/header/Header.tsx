import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Profile } from "../../components/menu_about_me/Profile";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Banner } from "./banner/Banner";

export function Header() {
  return (
    <StyledHeader>
      <FlexWrapper justify={"space-between"}>
        <Profile />
        <Banner />
        <Menu />
      </FlexWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  min-height: 100%;
`;
