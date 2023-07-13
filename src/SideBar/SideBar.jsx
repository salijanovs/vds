import "./SideBar.css";
import closeImg from "./../imgs/SideBar/Arrow.svg";
import React, { useContext, useState } from "react";
import { MyContext } from "../app/App";
import { Link } from "react-scroll";

const SideBar = () => {
  const sideBarItems = [
    { id: 1, text: "Купить VDS", to: "cost" },
    { id: 2, text: "О продукте", to: "info" },
    { id: 3, text: "FAQ", to: "selection" },
    { id: 4, text: "Тех. Поддержка", to: "question" },
  ];
  const [activeItem, setActiveItem] = useState(null);
  const { isOffBar, setIsOffBar } = useContext(MyContext);

  const openBar = () => {
    setIsOffBar(true);
  };

  const closeBar = () => {
    setIsOffBar(false);
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
    closeBar();
  };

  return (
    <div className={`side-bar ${isOffBar ? "open-bar" : ""}`}>
      <ul className="side-bar_list">
        {sideBarItems.map((item) => (
          <li
            key={item.id}
            className={`bar-list_item ${
              activeItem === item.id ? "bar-list_item--active" : ""
            }`}
          >
            <Link
              to={item.to}
              smooth={true}
              duration={1000}
              onClick={() => handleItemClick(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}

        <img
          onClick={isOffBar ? closeBar : openBar}
          className={`close-img  ${isOffBar ? "rotate-360" : ""}`}
          src={closeImg}
          alt=""
        />
      </ul>
    </div>
  );
};

export default SideBar;
