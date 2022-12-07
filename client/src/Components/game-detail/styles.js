import styled from 'styled-components'

export const GameDetailContainer = styled.div`
padding: 0 20px;
section{
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
            justify-content: center;
            align-items: center;
  }
  @media (max-width: 460px) {
    flex-direction: column;
        justify-content: center;
        align-items: center;
}
}

`
export const GameDetailTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 10px;
`
export const InfoDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
width: 75%;

`