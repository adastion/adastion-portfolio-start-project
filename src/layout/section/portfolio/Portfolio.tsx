import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../components/Button'
import portfolioPicPreview_1 from '../../../assets/images/portfolio_1.jpg'
import portfolioPicPreviewWebp_1 from '../../../assets/images/portfolio_1.webp'
import portfolioPicPreview_2 from '../../../assets/images/portfolio_2.jpg'
import portfolioPicPreviewWebp_2 from '../../../assets/images/portfolio_2.webp'
import portfolioPicPreview_3 from '../../../assets/images/portfolio_3.jpg'
import portfolioPicPreviewWebp_3 from '../../../assets/images/portfolio_3.webp'
import portfolioPicPreview_4 from '../../../assets/images/portfolio_4.jpg'
import portfolioPicPreviewWebp_4 from '../../../assets/images/portfolio_4.webp'
import portfolioPicPreview_5 from '../../../assets/images/portfolio_5.jpg'
import portfolioPicPreviewWebp_5 from '../../../assets/images/portfolio_5.webp'
import portfolioPicPreview_6 from '../../../assets/images/portfolio_6.jpg'
import portfolioPicPreviewWebp_6 from '../../../assets/images/portfolio_6.webp'
import portfolioPicPreview_7 from '../../../assets/images/portfolio_7.jpg'
import portfolioPicPreviewWebp_7 from '../../../assets/images/portfolio_7.webp'
import portfolioPicPreview_8 from '../../../assets/images/portfolio_8.jpg'
import portfolioPicPreviewWebp_8 from '../../../assets/images/portfolio_8.webp'
import portfolioPicPreview_9 from '../../../assets/images/portfolio_9.jpg'
import portfolioPicPreviewWebp_9 from '../../../assets/images/portfolio_9.webp'
import { Picture } from '../../../components/Picture'

export const Portfolio = () => {
  return (
    <PortfolioStyled>
      <FlexWrapper align={'center'} direction='column'>
        <Container>
          <FlexWrapper align={'center'} direction={'column'}>
            <SectionTitle>Portfolio</SectionTitle>
            <Text width={theme.widthText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. lorem ipsum
            </Text>
            <nav>
              <FlexWrapper as={'ul'} justify={'center'} wrap={'wrap'} gap={' 10px 38px'}>
                <li>
                  <Button className={'active'}>All categories</Button>
                </li>
                <li>
                  <Button>UI Design</Button>
                </li>
                <li>
                  <Button>Web Templates</Button>
                </li>
                <li>
                  <Button>Logo</Button>
                </li>
                <li>
                  <Button>Branding</Button>
                </li>
              </FlexWrapper>
            </nav>
            <GridWrapper as={'ul'}>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_1} />
                    <img src={portfolioPicPreview_1} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_2} />
                    <img src={portfolioPicPreview_2} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_3} />
                    <img src={portfolioPicPreview_3} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_4} />
                    <img src={portfolioPicPreview_4} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_5} />
                    <img src={portfolioPicPreview_5} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_6} />
                    <img src={portfolioPicPreview_6} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_7} />
                    <img src={portfolioPicPreview_7} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_8} />
                    <img src={portfolioPicPreview_8} alt='portfolio' />
                  </Picture>
                </a>
              </li>
              <li>
                <a href='#l'>
                  <Picture>
                    <source srcSet={portfolioPicPreviewWebp_9} />
                    <img src={portfolioPicPreview_9} alt='portfolio' />
                  </Picture>
                </a>
              </li>
            </GridWrapper>
          </FlexWrapper>
        </Container>
      </FlexWrapper>
    </PortfolioStyled>
  )
}

const PortfolioStyled = styled.section`
  & nav {
    & + * {
      margin-top: 50px;
    }

    & ul {
      & li {
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;

        & ${Button} {
          background: unset;
          padding: 0;

          &:hover,
          &:focus-visible {
            opacity: 0.7;
            color: inherit;
          }

          &.active {
            color: ${theme.colors.secondaryBg};

            &:hover,
            &:focus-visible {
              opacity: unset;
              color: ${theme.colors.secondaryBg};
              cursor: auto;
            }
          }
        }
      }
    }
  }
`

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, auto));
  gap: 20px;

  & li a {
    display: inline-block;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background: ${theme.colors.secondaryBg};
      opacity: 0;
      z-index: -1;
    }

    &:hover,
    &:focus-visible {
      &::before {
        transition: all 0.3s ease-in-out;
        z-index: 1;
        opacity: 0.9;
      }
    }

    & img {
      aspect-ratio: 1/0.971;
      object-fit: cover;
    }
  }
`
