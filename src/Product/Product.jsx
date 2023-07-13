import "./Product.css";
import server from "./../imgs/product/server.svg";
import cart from "./../imgs/product/cart.svg";
import { useContext } from "react";
import { MyContext } from "../app/App";

const Product = ({ day, price }) => {
  const { setOpenPay, setProductPrice } = useContext(MyContext);
  
  const payOpen = () => {
    setOpenPay(true);
    addData();
  };
  
  const addData = () => {
    setProductPrice(price);
  };
  return (
    <div className="product">
      <div className="product-header">
        <img src={server} alt="" />
        <p className="product-header_title">VDS</p>
      </div>
      <div className="product-body">
        <ul className="product-list">
          <li className="tile-list_item">RAM</li>
          <li className="tile-list_item">SSD Space</li>
          <li className="tile-list_item">CPU Cores</li>
          <li className="tile-list_item">Bandwidth</li>
          <li className="tile-list_item">Control Panel</li>
        </ul>
        <ul className="product-list">
          <li className="text-list_item">8 GB</li>
          <li className="text-list_item">30 GB</li>
          <li className="text-list_item">2</li>
          <li className="text-list_item">1 TB</li>
          <li className="text-list_item">Full</li>
        </ul>
      </div>
      <div className="product-footer">
        <p className="product-footer_text">
          {day} день <br /> <span>{price} ₽</span>
        </p>
        <button onClick={payOpen} className="order-btn">
          <img src={cart} alt="" />
          <p className="order-btn_text">Заказать</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
