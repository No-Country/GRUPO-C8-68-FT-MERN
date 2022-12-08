import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 90%;
  max-width: 270px;
  aspect-ratio: 3/4;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
export const CardTop = styled.div`
  height: 60%;
  width: 100%;
  img {
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  `
export const CardBottom = styled.div`
  height: 40%;
  `

export const CardTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
height: 40%;
color: #000000;
text-align: center;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    font-size: 21px;
  }
  @media (max-width: 460px) {
    font-size: 16px;
  }
  `

export const CardPrice = styled.p`
  font-family: 'Inter';
  text-align: center;
  font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
color: #000000;
height: 30%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
`