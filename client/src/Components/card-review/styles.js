import styled from 'styled-components'

export const CardReviewContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20%;
`
export const CardReviewUser = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 143%;
    letter-spacing: 0.17px;
    color: #00ADEF;
`

export const CardReviewImage = styled.div`
    height: 80px;
    width: 80px;
    img{
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
`
export const CardReviewComment = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 143%;
    letter-spacing: 0.17px;
    color: #FFFFFF;
`
export const CardReviewLikeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin: 10px 6px;
    }
`