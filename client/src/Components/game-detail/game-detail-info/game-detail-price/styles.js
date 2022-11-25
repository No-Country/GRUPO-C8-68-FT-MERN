import styled from 'styled-components'

export const GameDetaiIPriceContainer = styled.div`
background: rgba(105, 129, 138, 0.45);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 300px;
height: 200px;
width: 30%;
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    color: #00ADEF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
button{
    background: #00ADEF;
    border-radius: 20px;
    border: none;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        padding: 5px 0;
        white-space: nowrap;
    }
        
}
`