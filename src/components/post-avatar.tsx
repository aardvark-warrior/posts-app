import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PostAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://ieeecs-media.computer.org/wp-media/2018/04/02170212/edsger-dijkstra-e1528238724590.jpg" />
      <AvatarFallback>ED</AvatarFallback>
    </Avatar>
  );
}

export default PostAvatar;
