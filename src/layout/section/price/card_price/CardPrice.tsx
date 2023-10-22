import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Text } from "../../../../components/Text";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { theme } from "../../../../styles/Theme";
import { Icon } from "./../../../../components/Icons/Icon";

type CardPricePropsType = {
  title: string;
  price: string;
  service: string;
  info: string;
};

export const CardPrice = (props: CardPricePropsType) => {
  return (
<<<<<<< HEAD
    <FlexWrapper direction={'column'} align={''}>
      <Ttle>{props.title}</Ttle>
      <Price><span>$</span>{props.price}</Price>
=======
    <CardPriceStyled>
      <SectionTitle size={"24px"} weight={"600"}>
        {props.title}
      </SectionTitle>
      <Price>
        <span>$</span>
        {props.price}
        <Text position={"start"}>/hour</Text>
      </Price>
>>>>>>> dev
      <Text>{props.info}</Text>
      <ServiceList>
        <ServiceName>
          <Icon iconId={"check"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"check"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"check"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"check"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"close"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"close"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"close"} size={"13.2px"} />
          {props.service}
        </ServiceName>
        <ServiceName>
          <Icon iconId={"close"} size={"13.2px"} />
          {props.service}
        </ServiceName>
      </ServiceList>
      <BtnService>ORDER NOW</BtnService>
    </CardPriceStyled>
  );
};

const CardPriceStyled = styled.li`
  display: flex;
  gap: 21px;
  flex-direction: column;
  align-items: center;
  padding: 54px 31px 24px;
  background: ${theme.colors.primaryBg};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 123.6%;
  display: flex;
  align-items: end;
  gap: 10px;
`;

const ServiceList = styled.ul`
  display: grid;
  gap: 16px
`;

const ServiceName = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: ${theme.colors.secondary};
`;

const BtnService = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 41px;
  height: 38px;
  border-radius: 19px;
  background: ${theme.colors.primaryBg};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: 700;
`;
