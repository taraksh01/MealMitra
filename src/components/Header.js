import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [logStatus, setLogStatus] = useState("sign in");

  const handleLogStatus = () => {
    logStatus == "sign out"
      ? setLogStatus("sign in")
      : setLogStatus("sign out");
  };
  
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
          <button className="log-status" onClick={handleLogStatus}>
            {logStatus}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
