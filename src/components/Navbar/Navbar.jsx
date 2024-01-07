import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [loginText, setLoginText] = useState("Login");
  const handleLogin = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">TASTIFY</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
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
