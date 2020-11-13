import React, {
  FC,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import useGetPosts from 'hooks/useGetPosts/useGetPosts';
import PostsList from 'components/PostsList/PostsList';
import S from './App.styles';
import Loading from 'components/common/Loading/Loading';

const App: FC = () => {
  const [page, setPage] = useState(1);
  const { posts, isLoading, isError, hasMore } = useGetPosts(page);

  const observer: MutableRefObject<
    IntersectionObserver | undefined | null
  > = useRef(null);

  const lastElementRef = useCallback(
    (target: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer && observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (target) {
        observer.current.observe(target);
      }
    },
    [isLoading, hasMore, setPage],
  );

  return (
    <S.Wrapper>
      <PostsList posts={posts} lastElementRef={lastElementRef} />
      {isLoading && <Loading />}
      {isError && <div>Something went wrong...</div>}
    </S.Wrapper>
  );
};

export default App;
