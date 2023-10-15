import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Text } from "../../../components/Text";
import myPhoto from "./../../../assets/images/your_Image_1.png";
import { Icon } from "../../../components/Icons/Icon";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Btn } from "../../../components/Btn";

export const Banner = () => {
  return (
    <BannerStyled>
      <FlexWrapper direction={"column"} align={"start"} gap={"26px"}>
        <SectionTitle size={"48px"}>I’m Rayan Adlrdard</SectionTitle>
        <h1>
          <span>Front-end</span> Developer
        </h1>
        <Text size={"16px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </Text>
        <Btn>
          <span>HIRE ME</span>
          <Icon iconId={"arrowRight"} size={"16px"} />
        </Btn>
      </FlexWrapper>
      <img src={myPhoto} alt="photo" />
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-grow: 1;
  padding: 0 60px;
  background: ${Theme.colors.bg.primary || "#F0F0F6"};
  max-height: 467px;
  color: ${Theme.colors.primary};

  & h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 123.6%;

    & span {
      color: ${Theme.colors.bg.secondary};
    }
  }

  & img {
    height: -webkit-fill-available;
  }

  & p {
    max-width: 424px;
  }
  
`;
