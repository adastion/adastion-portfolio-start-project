import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Text } from "../../../components/Text";
import { Container } from "../../../components/Container";

export const Blog = () => {
  return (
    <FlexWrapper align={"center"} direction="column">
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <SectionTitle>Blog</SectionTitle>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper justify={"center"}>
            <li>
              <img src="/#" alt="preview" />
              <h4>How to make web tempates</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </p>
              <a href="#l">Learn more</a>
            </li>
            <li>
              <img src="/#" alt="preview" />
              <h4>make Business card</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </p>
              <a href="#l">Learn more</a>
            </li>
            <li>
              <img src="/#" alt="preview" />
              <h4>How to make Flyer Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </p>
              <a href="#l">Learn more</a>
            </li>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </FlexWrapper>
  );
};
