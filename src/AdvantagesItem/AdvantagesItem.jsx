import "./AdvantagesItem.css";
import React from "react";

const AdvantagesItem = ({ text, title, img }) => {
  return (
    <div className="advantages-item">
      <img className="advantages-item_img" src={img} alt="" />
      <h2 className="advantages-item_title">{title}</h2>
      <p className="advantages-item_text">{text}</p>
    </div>
  );
};

export default AdvantagesItem;
