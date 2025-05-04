
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import "./index.css";
import Explore from "./pages/Explore/Explore";
import ManagerItems from "./pages/ManagerItems/ManagerItems";
import ManagerCategory from "./pages/ManagerCategory/ManagerCategory";
import ManagerUser from "./pages/ManagerUser/ManagerUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Toaster} from "react-hot-toast";
import Login from "./pages/AuthPage/Login";

function App() {

  return (
    <main>
      {location.pathname !== "/login" && <Navbar />}
    <Toaster />
    <div >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManagerUser />} />
        <Route path="/manage-categories" element={<ManagerCategory />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/manage-items" element={<ManagerItems />} />
      </Routes>
    </div>
  </main>
  )
};

export default App
