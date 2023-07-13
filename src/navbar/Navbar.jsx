import "./navbar.css";
import logo from "./../imgs/Navbar/Лого.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="">
        <img className="navbar-logo" src={logo} alt="" />
      </a>
      <ul className="nav-list">
        <li className="nav-list_item">
          <Link
            className="nav-list_item-link"
            to="cost"
            smooth={true}
            duration={1000}
          >
            Купить VDS
          </Link>
        </li>

        <li className="nav-list_item">
          <Link
            to="info"
            smooth={true}
            duration={1000}
            className="nav-list_item-link"
          >
            О продукте
          </Link>
        </li>

        <li className="nav-list_item">
          <Link
            to="selection"
            smooth={true}
            duration={1000}
            className="nav-list_item-link"
            href=""
          >
            FAQ
          </Link>
        </li>
      </ul>
      <button className="support-btn">
        <a className="support-link" href="mailto:salijanov@email.ru">
          Тех. Поддержка
        </a>
      </button>
    </div>
  );
};

export default Navbar;
