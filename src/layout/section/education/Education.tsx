import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "./../../../components/Text";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Education = () => {
  return (
    <FlexWrapper align={"center"} direction="column">
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <SectionTitle>Education</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <Table>
            <li>
              <div>
                <SectionTitle size={"18px"} weight={"500"}>
                  University of Toronto
                </SectionTitle>
                <Text size={"15px"} position={"start"}>
                  <span>Student</span>
                  <DateStyled>Jan 1016 - Dec 2021</DateStyled>
                </Text>
              </div>
              <div>
                <SectionTitle size={"18px"} weight={"500"}>
                  Certificate of web training
                </SectionTitle>
                <Text size={"15px"} position={"start"} width={"536px"} flex>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </Text>
              </div>
            </li>
          </Table>
        </FlexWrapper>
      </Container>
    </FlexWrapper>
  );
};

const Table = styled.ul`
  padding: 42px 32px;
  background: ${theme.colors.primaryBg};
  width: 100%;

  & li {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

const DateStyled = styled.span`
  color: ${theme.colors.primaryBg};
  font-size: 10px;
  font-weight: 400;
  line-height: 100.9%;
  background: ${theme.colors.secondaryBg};
  padding: 4px 7px;
`;
