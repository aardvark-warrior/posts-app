import { Button } from "./ui/button";
import {
  HeartIcon,
  ChatBubbleIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PostActions = () => {
  return (
    <div className="flex justify-around mb-4">
      <Button variant={"ghost"} size="sm">
        <HeartIcon className="w-5 h-5" />
      </Button>
      <Button variant={"ghost"} size="sm">
        <ChatBubbleIcon className="w-5 h-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsHorizontalIcon className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem>Copy link to post</DropdownMenuItem>
          <DropdownMenuItem className="text-rose-500">
            Report post
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PostActions;
