import styled from 'styled-components'

export const CommentReviewContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
margin: 10px 0;
`
export const CommentReviewUser = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #00ADEF;
width: 170px;
`
export const CommentReviewImage = styled.div`
 height: 80px;
    width: 80px;
    margin-right: 16px;
    img{
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

`
export const CommentReviewComment = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
`
export const CommentReviewLikeContainer = styled.div`
margin-top: 20px;
`
export const CommentUserRating = styled.div`
display: flex;
margin-bottom: 10px;

`
export const CommentCenter = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
width: 70%;
`