import React from 'react';
import CommentCard from './CommentCard';

const memoCommentCard = React.memo(CommentCard, (prev, next) => prev.review.id === next.review.id);

export default memoCommentCard;
