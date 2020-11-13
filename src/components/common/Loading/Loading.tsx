import React from 'react';

import S from './Loading.styles';

const Loading = () => {
  return (
    <S.Wrapper>
      <S.Center>
        <S.DotsPulseAnimation />
      </S.Center>
    </S.Wrapper>
  );
};

export default Loading;
