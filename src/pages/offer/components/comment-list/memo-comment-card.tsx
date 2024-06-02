import React from 'react';
import CommentCard, { ReviewCardProps } from './comment-card';

const memoCommentCard = React.memo<ReviewCardProps>(CommentCard, (prev, next) => prev.review.id === next.review.id);

export default memoCommentCard;
