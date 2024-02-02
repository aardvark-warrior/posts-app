import type { Post as PostType } from "@/lib/data";

// More Verbose Method
// type PropsType = {
//     post: PostType
// }
// const Post = (props: PropsType) => {

const Post = ({ post }: { post: PostType }) => {
  return <div className="p-4 border-b-4 border-slate-400">{post.content}</div>;
};

export default Post;
