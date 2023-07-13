import "./question.css";
import mailImg from "./../imgs/question/mail.svg";

const Question = () => {
  return (
    <div id="question" className="question">
      <div className="container">
        <div className="questin-wrapper">
          <h2 className="question-title">Остались вопросы?</h2>
          <p className="question-text">
            Напишите нам на наш E-mail, и мы с радостью ответим на все ваши
            вопросы!
          </p>
          <button className="question-btn">
            <a className="question-btn_link" href="mailto:salijanov.s@mail.ru ">
              <img src={mailImg} alt="" />
              <p className="question-btn_text">Написать</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
