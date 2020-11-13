import React, { FC } from 'react';
import S from './PostDetails.styles';
import Post from 'api/post.interface';

import { Card } from 'react-bootstrap';
import Link from 'components/common/Link/Link';
import ImagePost from 'components/common/ImagePost/ImagePost';

const PostDetails: FC<Post> = ({ title, thumb, date, excerpt, url }: Post) => {
  return (
    <S.CardWrapper>
      <Link url={url}>
        <ImagePost thumb={thumb} />
      </Link>
      <Card.Body>
        <Link url={url}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{date}</small>
      </Card.Footer>
    </S.CardWrapper>
  );
};

export default PostDetails;
