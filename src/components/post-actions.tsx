import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PostActions = () => {
  return (
    <div className="flex justify-around ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsHorizontalIcon className="w-5 h-5 opacity-50 " />
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
