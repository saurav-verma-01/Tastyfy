import "./AppLayout.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
};

export default AppLayout;
