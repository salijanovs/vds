import "./Slider.css";
import img1 from "./../imgs/payment/QIWI.svg";
import img2 from "./../imgs/payment/Visa.svg";
import img3 from "./../imgs/payment/Yandex.svg";
import { useState } from "react";


const Slider = () => {
  const [count, setCount] = useState(0);
  const imgs = [img1, img2, img3];
  
  const nextImg = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const prevImg = () => {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={prevImg} className="prev">
        Назад
      </button>
      <img className="img1" src={imgs[count]} alt="" />
      <button onClick={nextImg} className="next">
        Далее
      </button>
    </div>
  );
};

export default Slider;
