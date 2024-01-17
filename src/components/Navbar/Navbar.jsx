import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Navbar = () => {
  const [loginText, setLoginText] = useState("Login");
  const handleLogin = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          {" "}
          <NavLink to="/">TASTIFY</NavLink>
        </h1>
        <nav className="nav">
          <ul>
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </nav>

        <button className="login" onClick={handleLogin}>
          {loginText}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
