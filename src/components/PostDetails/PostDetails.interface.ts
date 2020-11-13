import Post from 'api/post.interface';

interface PostDetailsProps extends Post {
  observerRef?: (target: Element) => void;
}

export default PostDetailsProps;
