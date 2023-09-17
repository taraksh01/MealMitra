import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="container">
          <li>
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="credit">
        created by
        <Link
          className="link"
          to={"https://github.com/taraksh01/"}
          target="_blank"
        >
          <span className="username">taraksh01</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
