import React from "react";
import styled from "styled-components";
import { Banner } from "./banner/Banner";
import { Container } from "./../../components/Container";

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Banner />
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  gap: 30px;

  & + * {
    margin-top: 138px;
  }
`; 
