import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostType } from "types/post";

export interface PostPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
}
