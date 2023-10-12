import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/Icons/Icon";
import { Text } from "../../../components/SectionText";
import styled from "styled-components";

type CardServicesPropsType = {
  iconCard: string;
  name: string;
  description: string;
};

export const CardServices = (props: CardServicesPropsType) => {
  return (
    <StyledCardServices>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon
          iconId={props.iconCard}
          viewBox={"0 0 68 68"}
          width={"68"}
          height={"68"}
        />
        <h3>{props.name}</h3>
        <Text>{props.description}</Text>
      </FlexWrapper>
    </StyledCardServices>
  );
};

const StyledCardServices = styled.div`
  width: 310px;
  min-height: 100%;
  padding: 10px;
`;
