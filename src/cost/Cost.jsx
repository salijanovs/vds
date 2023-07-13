import Product from "../Product/Product";
import "./cost.css";

const Cost = () => {
  return (
    <div id="cost" className="cost">
      <div className="container">
        <div className="cost-wrapper">
          <h2 className="cost-title">Стоимость и оплата</h2>
          <div className="order">
            <Product day="7" price="400" />
            <Product day="14" price="770" />
            <Product day="30" price="2700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
