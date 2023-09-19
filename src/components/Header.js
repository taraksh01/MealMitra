import { useState } from "react";
import "../styles/Header.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [logStatus, setLogStatus] = useState("sign in");

  const handleLogStatus = () => {
    logStatus == "sign out"
      ? setLogStatus("sign in")
      : setLogStatus("sign out");
  };

  const cartItems = useSelector((store) => store.store.items);

  // console.log(cart);
  return (
    <header className="header">
      <NavLink to={"/"}>
        <div className="logo">
          <h1 className="logo-title">MealMitra</h1>
        </div>
      </NavLink>
      <nav className="nav-bar">
        <ul>
          <li>search</li>
          <li>offers</li>
          <li className="font-bold text-xl">
            <NavLink to={"/cart"}>
              cart
              <span className="text-sm  bottom-2 relative">
                {cartItems.length}
              </span>
            </NavLink>
          </li>
          <button className="log-status" onClick={handleLogStatus}>
            {logStatus}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
