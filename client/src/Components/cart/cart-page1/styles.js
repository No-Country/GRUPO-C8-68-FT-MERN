import styled from 'styled-components'

export const CartPage1Container = styled.div`
padding-top: 10px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`
export const CartPage1Title = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #FFFFFF;
`
export const CartPage1Left = styled.div`
padding: 0 10px;
width: 60%;
display: flex;
flex-direction: column;

`

export const CartPage1Right = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 10px;
`
export const CartPage1Section = styled.section`
 display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const CartPage1Step = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 10px;
span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    font-size: 24px;
    font-weight: bold;
    color: black;
}
p{
    margin-left: 10px;
    font-size: 24px;
}
`