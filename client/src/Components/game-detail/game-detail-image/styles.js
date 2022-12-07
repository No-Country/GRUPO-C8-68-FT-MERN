import styled from 'styled-components'

export const GameDetailImageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 25%;
@media (max-width: 768px){
  width: 50%;
}
@media (max-width: 460px){
  width: 100%;
}
img{
    width: 90%;
  max-width: 300px;
  aspect-ratio: 3/4;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 10px;
  @media (max-width: 460px){
    width: 100%;
  }
}
`