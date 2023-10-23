import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Text } from '../../../../components/Text'
import styled, { css } from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { theme } from '../../../../styles/Theme'
import { Icon } from './../../../../components/Icons/Icon'
import { Button } from '../../../../components/Button'

type CardPricePropsType = {
  title: string
  price: string
  service: string[]
  info: string
  popularActive?: boolean
}

type CardPriceStyledPropsType = {
  popular?: boolean
}

export const CardPrice = (props: CardPricePropsType) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <FlexWrapper direction={'column'} align={''}>
      <Ttle>{props.title}</Ttle>
      <Price><span>$</span>{props.price}</Price>
=======
    <CardPriceStyled>
      <SectionTitle size={"24px"} weight={"600"}>
=======
    <CardPriceStyled popular={props.popularActive}>
      <SectionTitle as={'h3'} size={'24px'} margin={'20px'}>
>>>>>>> dev
        {props.title}
      </SectionTitle>
      <SectionTitle margin={'8px'}>
        <span>$</span>
        {props.price}
<<<<<<< HEAD
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
=======
        <small> /hour</small>
      </SectionTitle>
      <Text margin={'20px'}>{props.info}</Text>
      <FlexWrapper direction={'column'}>
        <FlexWrapper as={'ul'} direction='column' align={'start'}>
          <li>
            <Icon iconId={'check'} fill={theme.colors.secondaryBg} />
            <span>{props.service[0]}</span>
          </li>
          <li>
            <Icon iconId={'check'} fill={theme.colors.secondaryBg} />
            <span>{props.service[1]}</span>
          </li>
          <li>
            <Icon iconId={'check'} fill={theme.colors.secondaryBg} />
            <span>{props.service[2]}</span>
          </li>
          <li>
            <Icon iconId={'close'} fill={theme.colors.secondary} />
            <span>{props.service[3]}</span>
          </li>
          <li>
            <Icon iconId={'close'} fill={theme.colors.secondary} />
            <span>{props.service[4]}</span>
          </li>
          <li>
            <Icon iconId={'close'} fill={theme.colors.secondary} />
            <span>{props.service[5]}</span>
          </li>
          <li>
            <Icon iconId={'close'} fill={theme.colors.secondary} />
            <span>{props.service[6]}</span>
          </li>
          <li>
            <Icon iconId={'close'} fill={theme.colors.secondary} />
            <span>{props.service[7]}</span>
          </li>
        </FlexWrapper>
        <Button as={'a'} btnPrice>
          ORDER NOW
        </Button>
      </FlexWrapper>
>>>>>>> dev
    </CardPriceStyled>
  )
}

const CardPriceStyled = styled.div<CardPriceStyledPropsType>`
  max-width: 310px;
  padding: 54px 31px 24px;
  background: ${theme.colors.primaryBg};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  text-align: center;

  & h2 small {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    color: ${theme.colors.secondary};
  }

  & ul li {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    color: ${theme.colors.secondary};
  }

  & ${Button} {
    align-self: center;
    margin-top: 20px;
  }

  ${props =>
    props.popular &&
    css<CardPriceStyledPropsType>`
      position: relative;

      &::before {
        content: 'most popular';
        width: 100%;
        max-height: 30px;
        text-transform: capitalize;
        background: ${theme.colors.secondaryBg};
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        vertical-align: middle;
        padding: 6px;
        font-size: 15px;
      }

      & ${Button} {
        background: ${theme.colors.secondaryBg};

        &:hover {
          color: ${theme.colors.primaryBg};
        }
      }
    `}
`
