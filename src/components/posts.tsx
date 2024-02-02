// A React component, which is a function that returns React Element (aka HTML Element / UI)
import { posts } from "@/lib/data";
import Post from "./post";

const Posts = () => {
  return (
    <div className="">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
