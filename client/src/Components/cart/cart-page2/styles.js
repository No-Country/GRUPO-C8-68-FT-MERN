import styled from 'styled-components'

export const CartPage2Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const CartPage2Step = styled.div`
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
export const CartPage2Title= styled.p`
font-size: 24px;
text-align: center;
margin-bottom: 10px;
`
export const CartPagePaymentContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const CartPagePaymentCash= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: white;
border: 1px solid black;
border-radius: 4px;
padding: 0 20px;
p{
    color: black;
    font-size: 24px;
    display: flex;
    align-items: center;
}

`