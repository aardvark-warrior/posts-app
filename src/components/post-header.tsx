import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const PostHeader = () => {
  return (
    <div className="flex justify-between p-4">
        <div className="flex gap-3">
            <Avatar>
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Edsger_Wybe_Dijkstra.jpg" />
                <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <div>
                <div className="text-sm font-medium">Edsger Dijkstra</div>
                <div className="text-sm font-mono">@dijkstra</div>
            </div>
        </div>
        <div className="text-sm font-mono">1h </div>
    </div>
  );
};

export default PostHeader;
