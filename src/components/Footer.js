import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="container">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="credit">
        created by
        <Link to={"https://github.com/taraksh01/"} target="_blank">
          <span className="username">taraksh01</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
