import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import S from './PostsList.styles';
import Post from 'api/post.interface';
import PostDetails from 'components/PostDetails/PostDetails';
import PostsListProps from './PostsList.interface';

const PostsList: FC<PostsListProps> = ({
  posts,
  lastElementRef,
}: PostsListProps) => {
  return (
    <>
      {posts.map((post: Post, i) => {
        const lastPost = posts.length === i + 1;
        return (
          <S.CardDeckWrapper
            key={uuid()}
            ref={lastPost ? lastElementRef : null}
          >
            <PostDetails {...post} />
          </S.CardDeckWrapper>
        );
      })}
    </>
  );
};

export default PostsList;
