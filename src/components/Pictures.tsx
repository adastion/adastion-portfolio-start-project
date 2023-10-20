import styled, { css } from "styled-components";

type PicturesPropstype = {
  width?: string;
  height?: string;
  circle?: boolean;
};

export const Pictures = styled.picture<PicturesPropstype>`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.width || "150px"};
  overflow: hidden;
  object-fit: cover;

  & > * {
    width: inherit;
    height: inherit;
  }

  ${(props) =>
    props.circle &&
    css<PicturesPropstype>`
      border-radius: 50%;
    `}
`;
