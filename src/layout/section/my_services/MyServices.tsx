import React from "react";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "../../../components/SectionText";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { CardServices } from './CardServices';

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
      <CardServices />
    </>
  );
};
