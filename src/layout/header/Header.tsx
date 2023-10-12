import React from "react";
import { Menu } from "../../components/menu/Menu";
import { MenuAboutMe } from "../../components/MenuAboutMe/MenuAboutMe";
import styled from "styled-components";
import myPhoto from "./../../assets/images/your_Image_1.png";
import myPhotoWebp from "./../../assets/images/your_Image_1.webp";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/SectionText";
import { Icon } from "../../components/Icons/Icon";

export function Header() {
  return (
    <StyledHeader>
      <FlexWrapper justify={"space-between"}>
        <MenuAboutMe />
        <FlexWrapper justify={"center"} align={"center"}>
          <FlexWrapper direction={"column"}>
            <SectionTitle>I’m Rayan Adlrdard</SectionTitle>
            <h1>Front-end Developer </h1>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Text>
            <a href="">
              HIRE ME
              <Icon iconId={"arrow"} />
            </a>
          </FlexWrapper>
          <picture>
            <source srcSet={myPhotoWebp} type="image/webp" />
            <img src={myPhoto} alt="photo" />
          </picture>
        </FlexWrapper>
        <Menu />
      </FlexWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  min-height: 100%;
  background: #6e8ea2;
`;
