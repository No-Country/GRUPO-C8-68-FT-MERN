import { Rating } from '../rating/rating'
import {
  CommentReviewContainer,
  CommentReviewUser,
  CommentReviewImage,
  CommentReviewComment,
  CommentReviewLikeContainer,
  CommentCenter,
  CommentUserRating,
} from './styles'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

export const CommentReview = ({user, comment, img}) => {
  return (
    <CommentReviewContainer>
      <CommentReviewImage>
        <img
          src={img}
          alt=""
        />
      </CommentReviewImage>
      <CommentCenter>
        <CommentUserRating>
          <CommentReviewUser>{user}</CommentReviewUser>
          <Rating />
        </CommentUserRating>
        <CommentReviewComment>
        {comment}
        </CommentReviewComment>
      </CommentCenter>

      <CommentReviewLikeContainer>
        <span>
          <AiOutlineLike size="26px" />
        </span>
        <span>
          <AiOutlineDislike size="26px" />
        </span>
      </CommentReviewLikeContainer>
    </CommentReviewContainer>
  )
}
