import PostAvatar from "./post-avatar";

const PostHeader = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-3">
        <PostAvatar />
        <div>
          <div className="text-sm font-medium leading-none">
            Edsger Dijkstra
          </div>
          <div className="text-sm text-muted-foreground">@dijkstra</div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">1h</div>
    </div>
  );
};

export default PostHeader;
