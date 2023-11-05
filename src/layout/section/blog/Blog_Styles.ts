import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const Blog = styled.section`
  & ul {
    width: 100%;
    gap: 20px;
    overflow-x: auto;

    @media ${theme.media.mobile} {
      max-width: 340px;
    }
  }
`

const CardBlog = styled.li`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primaryBg};
  flex-grow: 1;
  flex-shrink: 0;

  & img {
    aspect-ratio: 1/0.971;
    object-fit: cover;
  }

  & a {
    width: 100%;
    font-size: 18px;
    text-transform: capitalize;
    padding: 0;
    justify-content: start;
  }

  & > div {
    padding: 25px;
  }
`

export const S ={
  Blog,
  CardBlog,
}