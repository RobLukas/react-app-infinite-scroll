import React, { FC } from 'react';
import ImageProps from './ImagePost.interface';
import S from './ImagePost.styles';

const ImagePost: FC<ImageProps> = ({ thumb }: ImageProps) => {
  return <S.Img variant="top" src={thumb} alt="Card image" />;
};

export default ImagePost;
