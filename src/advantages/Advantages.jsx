import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";
import "./advantages.css";
import rocketImg from "./../imgs/advantages/rocket.svg";
import gearsaltImg from "./../imgs/advantages/gearsalt.svg";
import windowsImg from "./../imgs/advantages/windows.svg";
import forkImg from "./../imgs/advantages/fork.svg";
import moneyImg from "./../imgs/advantages/money.svg";
import fingerprintImg from "./../imgs/advantages/fingerprint.svg";

import React from "react";

const Advantages = () => {
  return (
    <div id="adv" className="advantages">
      <div className="container">
        <div className="advantages-wrapper">
          <h2 className="advantages-title">Преимущества</h2>
          <div className="advantages-items">
            <AdvantagesItem
              img={rocketImg}
              text="Интернет канал без ограничений 
              Быстрый отклик"
              title="Скорость"
            />
            <AdvantagesItem
              img={gearsaltImg}
              text="Предустановлены популярные
 программы, в том числе
 и бот/сканер Betting Со"
              title="Софт"
            />
            <AdvantagesItem
              img={windowsImg}
              text="На всех решениях предустановлена 
сборка Windows 10"
              title="Windows 10"
            />
            <AdvantagesItem
              img={forkImg}
              text="Стабильная работа бота и 
моментальная проставка 
плеч в сканере"
              title="Оптимизация
под вилки"
            />
            <AdvantagesItem
              img={moneyImg}
              text="400р - 7 дней
Одно из самых лучших 
предложений на рынке"
              title="Оптимальная цена"
            />
            <AdvantagesItem
              img={fingerprintImg}
              text="Оптимальная цена"
              title="Уникализация"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
