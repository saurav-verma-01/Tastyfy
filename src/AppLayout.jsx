import "./AppLayout.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
