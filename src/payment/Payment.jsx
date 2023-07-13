import { useState, useEffect, useContext } from "react";
import Slider from "../Slider/Slider";
import "./payment.css";
import { MyContext } from "../app/App";
import closeImg from "./../imgs/payment/close.svg";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState(1);
  const [countError, setCountError] = useState(false);
  const { openPay, setOpenPay, productPrice } = useContext(MyContext);

  useEffect(() => {
    if (openPay) {
      document.body.classList.add("scroll");
    }
    return () => {
      document.body.classList.remove("scroll");
    };
  }, []);

  const closePay = () => {
    setOpenPay(false);
  };

  const buy = () => {
    if (value === 0) {
      console.log(0);
    }
  };

  const addValue = (e) => {
    let inputValue = +e.target.value;
    if (inputValue > 100) {
      e.target.value = 100;
      setCountError(true);
    } else {
      setValue(inputValue);
      setCountError(false);
    }
  };

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setError(isValid ? "" : "Введите корректный Email");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id="payment" className="payment">
      <div className="payment-wrapper">
        <div className="pay">
          <h2 className="payment-title">Выберите способ оплаты</h2>
          <p className="payment-text  payment-text_first">
            Выберите для себя наиболее удобный способ
          </p>
          <Slider />
        </div>
        <div className="get-mail">
          <h2 className="payment-title">Введите свой корректный E-mail</h2>
          <p className="payment-text">
            На Вашу почту придут данные для подключения к VPS
          </p>
          <input
            className="email-input"
            type="email"
            value={email}
            onChange={handleChange}
            onBlur={validateEmail}
            placeholder="E-mail (на него придут данные для подключения к VPS)"
          />
          {error && <p className="error">{error}</p>}
        </div>
        <div className="other">
          <h2 className="payment-title">Дополнительно</h2>
          <p className="payment-text">Выберите количество</p>
          <input
            required
            onChange={addValue}
            placeholder="Выберите приобретаемое количество"
            type="number"
            defaultValue={1}
            min={1}
          />
          {countError && <p className="error">Максимум: 100</p>}{" "}
          {value === 0 ? <p className="error">Введите количество</p> : ""}
        </div>
        <div className="payment-cost">
          <button type="submit" onClick={buy} className="payment-cost_btn">
            <a className="payment-link" href="http://qiwi.com">
              Перейти к оплате
            </a>
          </button>
          <p className="payment-text">
            Сумма к оплате (руб): <label>{productPrice * value}</label>
          </p>
        </div>{" "}
        <img
          onClick={closePay}
          className="payment-close_img"
          src={closeImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Payment;
