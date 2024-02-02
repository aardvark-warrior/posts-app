import type { Post as PostType } from "@/lib/data";
import PostHeader from "./post-header";
import PostActions from "./post-actions";

// More Verbose Method
// type PropsType = {
//     post: PostType
// }
// const Post = (props: PropsType) => {

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="border-b-4 border-slate-400">
      <PostHeader />
      <div className="p-4">{post.content}</div>
      <PostActions />
    </div>
  );
};

export default Post;
