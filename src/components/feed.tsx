import Header from "./header";
import Posts from "./posts";

const Feed = () => {
  return (
    <div className="w-full border-x-4 border-slate-400 md:max-w-xl">
      <Header />
      <Posts />
    </div>
  );
};

export default Feed;
