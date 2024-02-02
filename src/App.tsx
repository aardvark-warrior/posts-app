import Feed from "./components/feed";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex justify-center min-h-screen gap-3">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
