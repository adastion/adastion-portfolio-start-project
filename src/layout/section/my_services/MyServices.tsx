import React from "react";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "../../../components/SectionText";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { CardServices } from "./CardServices";
import { wrap } from "module";

export const MyServices = () => {
  return (
    <>
      <FlexWrapper direction={"column"} align={"center"}>
        <SectionTitle>My services</SectionTitle>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </FlexWrapper>
      <FlexWrapper wrap={"wrap"}>
        <CardServices
          iconCard={"coding"}
          name={"web development"}
          description={"blog, e-commerce"}
        />
        <CardServices
          iconCard={"ilustration"}
          name={"uI/uX design"}
          description={"Mobile app, website design"}
        />
        <CardServices
          iconCard={"microphone"}
          name={"sound design"}
          description={"Voice Over, Beat Making"}
        />
        <CardServices
          iconCard={"gameDevelopment"}
          name={"game design"}
          description={"Character Design, Props & Objects"}
        />
        <CardServices
          iconCard={"photographer"}
          name={"photography"}
          description={"portrait, product photography"}
        />
      </FlexWrapper>
    </>
  );
};
