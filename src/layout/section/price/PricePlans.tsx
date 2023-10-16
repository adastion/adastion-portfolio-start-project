import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Text } from "./../../../components/Text";
import { FlexWrapper } from "./../../../components/FlexWrapper";
import { CardPrice } from "./card_price/CardPrice";
import { Theme } from "../../../styles/Theme";
import styled from "styled-components";

export const PricePlans = () => {
  return (
    <PricePlansStyled>
      <SectionTitle>Price plans</SectionTitle>
      <Text width={"438px"}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Text>
      <FlexWrapper justify={"center"} wrap={"wrap"} gap={Theme.gapCard}>
        <CardPrice
          title={"silver"}
          price={"0.00"}
          info={"For most businesses that want tooptimize web queries"}
          service={"UI Design"}
        />
        <CardPrice
          title={"gold"}
          price={"50.00"}
          info={"For most businesses that want tooptimize web queries"}
          service={"UI Design"}
        />
        <CardPrice
          title={"dimond"}
          price={"80.00"}
          info={"For most businesses that want tooptimize web queries"}
          service={"UI Design"}
        />
      </FlexWrapper>
    </PricePlansStyled>
  );
};

const PricePlansStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
