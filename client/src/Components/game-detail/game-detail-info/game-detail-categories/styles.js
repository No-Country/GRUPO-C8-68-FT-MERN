import styled from 'styled-components'

export const GameDetailCategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 70%;
    @media (max-width: 768px){
        width: 50%;
    }
    @media (max-width: 460px){
        width: 100%;
    }
    .title-categories{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #00ADEF;
    }
    `
export const GameReleaseDate = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 10px 0 15px 5px;
    `
export const CategoriesContainer = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 10px 0 15px 0;
    li{
        background-color: #00ADEF;
    border-radius: 20px;
    padding: 5px 5px;
    margin: 5px 5px;
    list-style: none;
        p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        }
    }

`