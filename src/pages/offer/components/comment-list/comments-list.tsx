import { FC } from 'react';
import { Comment } from '../../../../types/comment';
import MemoCommentCard from './memo-comment-card';
import { compareDates } from '../../../../utils/date-formatting';

export interface CommentsListProps {
  reviews: Comment[] | undefined;
}

const MAX_COMMENTS_NUMBER = 10;

const CommentsList: FC<CommentsListProps> = ({ reviews }) => {
  if (reviews === undefined || reviews.length === 0) {
    return <h2 className="reviews__title">There is no comments yet. <br /> Leave comment first!</h2>;
  }

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews
          .sort((a, b) => compareDates(a.date, b.date))
          .slice(0, Math.min(reviews.length, MAX_COMMENTS_NUMBER))
          .map((it) => <MemoCommentCard key={it.id} review={it} />)}
      </ul>
    </>
  );
};

export default CommentsList;
