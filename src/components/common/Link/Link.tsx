import React, { FC } from 'react';
import LinkProps from './Link.interface';

const Link: FC<LinkProps> = ({ children, url }: LinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
