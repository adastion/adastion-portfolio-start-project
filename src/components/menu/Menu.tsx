import React from "react";
import { Icon } from "../Icons/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";

export const Menu = () => {
  return (
    <MenuStyled>
      <Icon iconId={"contrast"} boxWidth="16" boxHeight="16" />
      <ul>
        <li>
          <Button
            padding={"10px"}
            colorBackground={theme.colors.pageBg}
            as="a"
            circle
          >
            <Icon
              fill={theme.colors.secondary}
              iconId={"home"}
              boxWidth="16"
              boxHeight="16"
            />
          </Button>
        </li>
        <li>
          <Button
            padding={"10px"}
            colorBackground={theme.colors.pageBg}
            as="a"
            circle
          >
            <Icon
              fill={theme.colors.secondary}
              iconId={"services"}
              boxWidth="16"
              boxHeight="16"
            />
          </Button>
        </li>
        <li>
          <Button
            padding={"10px"}
            colorBackground={theme.colors.pageBg}
            as="a"
            circle
          >
            <Icon
              fill={theme.colors.secondary}
              iconId={"cv"}
              boxWidth="16"
              boxHeight="16"
            />
          </Button>
        </li>
        <li>
          <Button
            padding={"10px"}
            colorBackground={theme.colors.pageBg}
            as="a"
            circle
          >
            <Icon
              fill={theme.colors.secondary}
              iconId={"portfolio"}
              boxWidth="16"
              boxHeight="16"
            />
          </Button>
        </li>
        <li>
          <Button
            padding={"10px"}
            colorBackground={theme.colors.pageBg}
            as="a"
            circle
          >
            <Icon
              fill={theme.colors.secondary}
              iconId={"blog"}
              boxWidth="16"
              boxHeight="16"
            />
          </Button>
        </li>
        <li>
          <Button colorBackground={theme.colors.pageBg} as="a" circle>
            <Icon
              fill={theme.colors.secondary}
              iconId={"contact"}
              boxWidth="16"
              boxHeight="16"
              size="16"
            />
          </Button>
        </li>
      </ul>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`
  background: ${theme.colors.primaryBg};
  display: grid;
  justify-items: center;
  padding: 50px 34px 0;
  height: 100%;

  & ul {
    display: grid;
    gap: 44px;
    margin: 174px 0;
  }
`;
