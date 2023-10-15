import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { SectionTitle } from "../SectionTitle";
import { Text } from "../Text";
import myPhoto from "./../../assets/images/your_Image_1.png";
import myPhotoWebp from "./../../assets/images/your_Image_1.webp";
import { Icon } from "../Icons/Icon";
import styled from "styled-components";

export const Banner = () => {
  return (
    <BannerStyled>
      <FlexWrapper direction={"column"}>
        <SectionTitle size={"48px"}>I’m Rayan Adlrdard</SectionTitle>
        <h1>
          <span>Front-end</span> Developer{" "}
        </h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </Text>
        <a href="">
          HIRE ME
          <Icon iconId={"arrow"} />
        </a>
      </FlexWrapper>
      <img src={myPhoto} alt="photo" />
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;
  background: white;
  max-height: 467px;

  & h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 123.6%;

    & span {
      color: #ffb400;
    }
  }
`;
