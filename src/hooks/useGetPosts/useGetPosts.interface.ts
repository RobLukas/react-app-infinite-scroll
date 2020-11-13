import Post from 'api/post.interface';

export interface UseGetPostsReturn {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
}

export interface PostState extends UseGetPostsReturn {}
