import { useCallback, useEffect, useState } from 'react';
import axios from 'config/axios.config';
import { PostState, UseGetPostsReturn } from './useGetPosts.interface';

const useGetPosts = (page: number): UseGetPostsReturn => {
  const [postsData, setPostsData] = useState<PostState>({
    posts: [],
    isLoading: true,
    isError: false,
    hasMore: false,
  });

  const fetchPosts = useCallback(async () => {
    try {
      setPostsData((prevState) => ({
        ...prevState,
        isLoading: true,
        isError: false,
      }));
      const { data } = await axios.get(`/posts`, {
        params: {
          _page: page,
        },
      });
      const posts = data;
      setPostsData((prevState) => ({
        ...prevState,
        posts: [...prevState.posts, ...posts],
        hasMore: data.length > 0,
        isLoading: false,
        isError: false,
      }));
    } catch (err) {
      setPostsData((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true,
      }));
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { ...postsData };
};

export default useGetPosts;
