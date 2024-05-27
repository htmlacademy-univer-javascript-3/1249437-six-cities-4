import React from 'react';
import CommentsList, { CommentsListProps } from './comments-list';

const MemoCommentsList = React.memo<CommentsListProps>(CommentsList);

export default MemoCommentsList;
