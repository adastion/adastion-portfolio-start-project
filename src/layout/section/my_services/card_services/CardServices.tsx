import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icons/Icon";
import { Text } from "../../../../components/Text";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

type CardServicesPropsType = {
  iconCard: string;
  name: string;
  description: string;
  btn?: string;
};

export const CardServices = (props: CardServicesPropsType) => {
  return (
    <StyledCardServices>
      <FlexWrapper direction={"column"} align={"center"}>
        {props.iconCard !== "" ? (
          <Icon iconId={props.iconCard} fill={"#FFB400"} />
        ) : (
          ""
        )}
        <h3>{props.name}</h3>
        <Text>{props.description}</Text>
        {props.btn !== "" ? <a href="#l">{props.btn}</a> : null}
      </FlexWrapper>
    </StyledCardServices>
  );
};

const StyledCardServices = styled.div`
  width: 310px;
  min-height: 100%;
  padding: 10px;
  background: ${Theme.colors.bg.primary};
`;
