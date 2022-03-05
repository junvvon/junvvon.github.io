import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { PostType } from 'types/post';
import {
  Image,
  Article,
  TextArea,
  Description,
  Date,
} from './PostPreview.style';

const PostPreview = ({ post }: { post: PostType }) => {
  return (
    <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`} passHref>
      <Article>
        {!!post.image && <Image src={post.image} alt="post thumbnail" />}
        <TextArea>
          <h1>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <Description>{post.description}</Description>
          <Date>{format(parseISO(String(post.date)), 'MMMM dd, yyyy')}</Date>
        </TextArea>
      </Article>
    </Link>
  );
};

export default PostPreview;
