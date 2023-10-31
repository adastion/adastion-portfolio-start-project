import styled from 'styled-components'

export const MapContainer = () => (
  <MapContainerStyled>
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150506.04403433678!2d27.428220691043947!3d53.884526672766555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1698780059604!5m2!1sru!2sby'></iframe>
  </MapContainerStyled>
)

const MapContainerStyled = styled.div`
  width: 100%;

  & iframe {
    width: 100%;
    height: 300px;
    border: unset;
  }
`
