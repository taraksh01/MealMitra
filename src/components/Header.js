import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="logo-title">MealMitra</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>search</li>
          <li>offers</li>
          <li>cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
