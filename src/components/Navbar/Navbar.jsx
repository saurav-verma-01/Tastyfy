import "./Navbar.css";

const Navbar = () => {
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
      </div>
    </header>
  );
};

export default Navbar;
