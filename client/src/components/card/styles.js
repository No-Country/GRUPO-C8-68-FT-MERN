import styled from "styled-components";

export const CardContainer = styled.div`
    width: 310px;
height: 458px;
background: #FFFFFF;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
export const CardImg = styled.img`
 height: 310px;
 width: 310px;
 object-fit: fill;
 border-radius: 20px 20px 0 0;
`
export const CardTitle = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
`

export const CardPrice = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
display: flex;
align-items: center;
color: #000000;
`