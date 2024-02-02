import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-center gap-4 border-b-4 border-slate-400 p-4">
      <Button variant="link">Highlights</Button>
      <Button variant="link" disabled={true}>
        Everyone
      </Button>
    </div>
  );
};

export default Header;
