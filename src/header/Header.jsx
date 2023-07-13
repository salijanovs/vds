import HeaderItem from "../HeaderItem/HeaderItem";
import Navbar from "../navbar/Navbar";
import "./header.css";
import dokImg from "./../imgs/header/dok.svg";
import subwayImg from "./../imgs/header/subway_power.svg";
import userImg from "./../imgs/header/user-secret.svg";
import serverImg from "./../imgs/header/server.svg";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <div className="header-wrapper">
          <div className="header-content">
            <h1 className="header-title">ЛУЧШЕЕ СОЧЕТАНИЕ</h1>
            <div className="header-items">
              <HeaderItem img={userImg} title="АНОНИМНОСТЬ" />
              <HeaderItem img={dokImg} title="БЕЗОПАСНОСТЬ" />
              <HeaderItem img={subwayImg} title="МОЩНОСТЬ" />
            </div>
            <p className="header-text">
              <span>VDS</span> - это виртуально созданный ПК с нужными вам
              конфигурациями. <br /> Это отличное решение для полной анонимности
              и получения <br /> необходимой мощности для решения различных
              задач.
            </p>{" "}
            <Link
              className="nav-list_item-link"
              to="cost"
              smooth={true}
              duration={1000}
            >
              <button className="header-btn">
                <img className="header-btn_img" src={serverImg} alt="" />{" "}
                <p>Купить VDS</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Header;
