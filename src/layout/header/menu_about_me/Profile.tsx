import React from "react";
import avatarProfile from "./../../../assets/images/avatar_profile.jpg";
import avatarProfileWebp from "./../../../assets/images/avatar_profile.webp";
import { Icon } from "../../../components/Icons/Icon";
import { Button } from "../../../components/Button";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "./../../../components/FlexWrapper";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "./../../../components/Text";
import { InfoCell } from "./info_cell/InfoCell";

export const Profile = () => {
  return (
    <ProfileStyled>
      <FlexWrapper direction={"column"} align={"center"}>
        <picture>
          <source srcSet={avatarProfileWebp} type="image/webp" />
          <source srcSet={avatarProfile} type="image/png" />
          <img src={avatarProfile} alt="avatar" />
        </picture>
        <SectionTitle as={"h4"} size={"18"} weight={"500"} margin={"15px"}>
          Rayan Adlardard
        </SectionTitle>
        <Text margin={"15px"}>Font-end Developer</Text>
        <FlexWrapper as={"ul"} justify={"space-between"}>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"faceboock"} />
            </Button>
          </li>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"instagram"} />
            </Button>
          </li>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"twitter"} />
            </Button>
          </li>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"linkedin"} />
            </Button>
          </li>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"youtube"} />
            </Button>
          </li>
          <li>
            <Button width={"24px"} circle>
              <Icon size={"14px"} iconId={"dribbble"} />
            </Button>
          </li>
        </FlexWrapper>
        <FlexWrapper direction={"column"}>
          <InfoCell />
          <section>
            <SectionTitle as={"h4"} size={"18"} weight={"500"} margin={"15px"}>
              Languages
            </SectionTitle>
            <ul>
              <li>
                <Text as={"span"}>Bangla</Text>
                <Text as={"span"}>100%</Text>
              </li>
              <li>
                <Text as={"span"}>English</Text>
                <Text as={"span"}>80%</Text>
              </li>
              <li>
                <Text as={"span"}>Spanish</Text>
                <Text as={"span"}>60%</Text>
              </li>
            </ul>
          </section>
          <section>
            <SectionTitle as={"h4"} size={"18"} weight={"500"} margin={"15px"}>
              Skills
            </SectionTitle>
            <ul>
              <li>
                <Text as={"span"}>Html</Text>
                <Text as={"span"}>90%</Text>
              </li>
              <li>
                <Text as={"span"}>CSS</Text>
                <Text as={"span"}>85%</Text>
              </li>
              <li>
                <Text as={"span"}>Js</Text>
                <Text as={"span"}>80%</Text>
              </li>
              <li>
                <Text as={"span"}>PHP</Text>
                <Text as={"span"}>75%</Text>
              </li>
              <li>
                <Text as={"span"}>WordPress</Text>
                <Text as={"span"}>85%</Text>
              </li>
            </ul>
          </section>
          <section>
            <SectionTitle as={"h4"} size={"18"} weight={"500"} margin={"15px"}>
              Extra Skills
            </SectionTitle>
            <ul>
              <li>
                <Icon iconId={"square"} />
                <Text as={"span"}>Bootstrap, Materialize</Text>
              </li>
              <li>
                <Icon iconId={"square"} />
                <Text as={"span"}>Stylus, Sass, Less</Text>
              </li>
              <li>
                <Icon iconId={"square"} />
                <Text as={"span"}>Gulp, Webpack, Grunt</Text>
              </li>
              <li>
                <Icon iconId={"square"} />
                <Text as={"span"}>GIT Knowledge</Text>
              </li>
            </ul>
          </section>
          <Button sideBar padding={"10px"}>
            <span>Download cv</span>
            <Icon size={"14"} iconId={"download"} />
          </Button>
        </FlexWrapper>
      </FlexWrapper>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.aside`
  background: ${theme.colors.primaryBg};
  max-width: 305px;
  width: 100%;
  height: 100%;
  padding: 50px 42px 25px;

  & picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;

    & > * {
      width: inherit;
      height: inherit;
    }

    & + h4 {
      margin-top: 30px;
    }
  }

  & ul {
    width: 100%;

    & > li {
      width: 100%;
    }
  }
`;
