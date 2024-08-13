import "./App.css";
import { Sidebar } from "./components/SideBar";
import Logistics from "./pages/Logistics";

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Logistics />
    </div>
  );
}

export default App;
