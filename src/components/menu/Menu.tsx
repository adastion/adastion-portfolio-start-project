import React from "react";
import { Icon } from "../Icons/Icon";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Button } from "../Button";

export const Menu = () => {
  return (
    <MenuStyled>
      <Icon iconId={"contrast"} boxWidth="16" boxHeight="16"/>
      <ul>
        <li>
          <Button padding={"10px"} colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"home"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
        <li>
          <Button padding={"10px"} colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"services"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
        <li>
          <Button padding={"10px"} colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"cv"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
        <li>
          <Button padding={"10px"} colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"portfolio"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
        <li>
          <Button padding={"10px"} colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"blog"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
        <li>
          <Button colorBackground={Theme.colors.bg.page} as="a" circle>
            <Icon iconId={"contact"} boxWidth="16" boxHeight="16"/>
          </Button>
        </li>
      </ul>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`
  background: ${Theme.colors.bg.primary};
  display: grid;
  position: fixed;
  top: 0;
  z-index: 3;


`;
