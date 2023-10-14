import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "./../../../components/Text";
import { CardRecommendation } from "./card_recommendation/CardRecommendation";

export const Recommendations = () => {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <SectionTitle>recommendations</SectionTitle>
      <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Text>
      <FlexWrapper wrap={"wrap"}>
        <CardRecommendation 
          rating={'star'}
          title={'Great Quality!'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}

        />
      </FlexWrapper>
    </FlexWrapper>
  );
};
