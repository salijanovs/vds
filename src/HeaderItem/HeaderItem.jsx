import "./HeaderItem.css";
import React from "react";

const HeaderItem = ({ img, title }) => {
  return (
    <div className="header-item">
      <img className="header-item_img" src={img} alt="" />
      <p className="header-item_title">{title}</p>
    </div>
  );
};

export default HeaderItem;
