import React from "react";
import { theme } from "../../../../styles/theme";
import styled, { css } from "styled-components";
import { Text } from "./../../../../components/Text";
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type InfoCellPropsType = {
  profile?: boolean;
};

export const InfoCell = () => {
  return (
    <InfoCellStyled profile>
      <FlexWrapper
        as={"ul"}
        direction={"column"}
        justify={"space-between"}
        gap={"10px"}
      >
        <li>
          <Text margin={"0"} as={"span"}>
            Age:
          </Text>
          <Text margin={"0"} as={"span"}>
            24
          </Text>
        </li>
        <li>
          <Text margin={"0"} as={"span"}>
            Residence:
          </Text>
          <Text margin={"0"} as={"span"}>
            BD
          </Text>
        </li>
        <li>
          <Text margin={"0"} as={"span"}>
            Freelance:
          </Text>
          <Text margin={"0"} as={"span"}>
            Available
          </Text>
        </li>
        <li>
          <Text margin={"0"} as={"span"}>
            Address:
          </Text>
          <Text margin={"0"} as={"span"}>
            Dhaka,Bangladesh
          </Text>
        </li>
      </FlexWrapper>
    </InfoCellStyled>
  );
};

const InfoCellStyled = styled.section<InfoCellPropsType>`
  padding: 25px 0;
  border-bottom: 2px solid ${theme.colors.lineTable};
  & ul li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  ${(props) =>
    props.profile &&
    css<InfoCellPropsType>`
      & ul li {
        & > * {
          color: ${theme.colors.primary};
        }

        & span:first-child {
          display: inline-block;
          background: ${theme.colors.secondaryBg};
          padding: 0 7px;
        }
      }
    `}
`;
