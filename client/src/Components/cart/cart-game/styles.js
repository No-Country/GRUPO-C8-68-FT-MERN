import styled from 'styled-components'

export const CartGameContainer = styled.div`
width: 100%;
border: 1px solid #000000;
background: white;
margin: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 150px;
`
export const CartGameLeft = styled.div`
width: 25%;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 120px;
    aspect-ratio: 3/3;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
export const CartGameCenter = styled.div`
width: 55%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
p{
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 30px;
color: #00ADEF;
padding-top: 10px;
}
`
export const CartGameRight = styled.div`
height: 100%;
display: flex;
flex-direction: column; 
justify-content: space-between;
align-items: flex-end;
width: 20%;
padding: 20px 0;
padding-right: 10px;
p{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 30px;
color: #000000;
}
span{
    cursor: pointer;
    color: #000000;
    transition: color .2s ease;
    :hover {
        color: red
    }
}
`