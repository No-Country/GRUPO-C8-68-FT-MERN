import styled from 'styled-components'

export const CartPage3Container = styled.div`
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const CartPage3Step = styled.div`
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
export const CartPage3Detail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-size: 20px;
    margin: 30px 0;
}
button{
    height: 40px;
width: 90px;
  margin: 6px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-radius: 16px;
  background-color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  transition: filter .2s ease;
  color: #00ADEF;
  font-weight: bold;
  :hover {
    cursor: pointer;
    filter: brightness(.8);
  }
}
`