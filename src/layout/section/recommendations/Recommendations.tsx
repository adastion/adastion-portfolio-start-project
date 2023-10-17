import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "./../../../components/Text";
import { CardRecommendation } from "./card_recommendation/CardRecommendation";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const cardListRecommendation = [
  {
    nameIcon: "star",
    title: "Great Quality!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    nameIcon: "star",
    title: "Amazing work!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    nameIcon: "star",
    title: "Great",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
];

export const Recommendations = () => {
  return (
    <RecommendationsStyled>
      <SectionTitle>recommendations</SectionTitle>
      <Text width={Theme.widthText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Text>
      <FlexWrapper wrap={"wrap"} align={"center"} gap={Theme.gapCard}>
        {cardListRecommendation.map((card, index) => (
          <CardRecommendation
            indexCard={index}
            nameIcon={card.nameIcon}
            title={card.title}
            description={card.description}
          />
        ))}
      </FlexWrapper>
    </RecommendationsStyled>
  );
};

const RecommendationsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
