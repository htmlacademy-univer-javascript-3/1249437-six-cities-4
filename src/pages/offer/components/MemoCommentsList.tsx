import React from 'react';
import CommentsList, { CommentsListProps } from './CommentsList';

const MemoCommentsList = React.memo<CommentsListProps>(CommentsList);

export default MemoCommentsList;
