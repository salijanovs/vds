import SelectionItem from "../SelectionItem/SelectionItem";
import "./selection.css";

const Selection = () => {
  return (
    <div id="selection" className="selection">
      <div className="container">
        <div className="selection-wrapper">
          <h2 className="selection-title">Как мне выбрать сервер?</h2>
          <p className="selection-text">
            Зарегистрироваться на сайте и оплатить виртуальный компьютер. <br />
            Далее подключиться к виртуальному компьютеру, то есть:
          </p>
          <div className="selection-items">
            <SelectionItem
              ClassNumber="1"
              number="1"
              text="На своем компьютере нажать на кнопку пуск;"
            />
            <SelectionItem
              ClassNumber="2"
              number="2"
              text="В строке поиск напечатать подключение;"
            />
            <SelectionItem
              ClassNumber="3"
              number="3"
              text="Выбрать подключение к удаленному рабочему столу;"
            />
            <SelectionItem
              ClassNumber="4"
              number="4"
              text="Напечатать айпи и порт слитно;"
            />
            <SelectionItem
              ClassNumber="5"
              number="5"
              text="Далее выбрать Administrator и пароль;"
            />
            <SelectionItem
              ClassNumber="6"
              number="6"
              text="Задать свой пароль;"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
