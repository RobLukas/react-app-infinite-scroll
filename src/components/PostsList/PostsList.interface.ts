import Post from 'api/post.interface';

interface PostsListProps {
  posts: Post[];
  lastElementRef: (target: HTMLDivElement | null) => void;
}

export default PostsListProps;
