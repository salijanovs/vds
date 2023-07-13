import "./info.css";
import supportImg from "././../imgs/mainRules/support.svg";
import teamtImg from "././../imgs/mainRules/team.svg";
import clarityImg from "././../imgs/mainRules/clarity.svg";
import commentsImg from "././../imgs/mainRules/comments.svg";
import safeImg from "././../imgs/mainRules/safe.svg";
import MainRules from "../MainRules/MainRules";

const Info = () => {
  return (
    <div id="info" className="info">
      <div className="container">
        <div className="info-wrapper">
          <h2 className="info-title">
            О <span> продукте </span>
          </h2>
          <p className="info-text">
            <span> VDS </span> - это виртуально созданный ПК с нужными вам
            конфигурациями. <br /> Это отличное решение для полной анонимности и
            получения необходимой мощности для решения <br /> различных задач.{" "}
            <br />
            <br /> Изначально мы создавали VDS под свои личные нужды
            (использование собственного ПО ), но увидев <br />
            дефицит качественного сервиса <span> VDS для профессионалов</span>,
            мы решили предоставить его широкой <br /> аудитории.
          </p>
          <h3 className="main-rules_title">
            Наши главные правила для всех продуктов:{" "}
          </h3>
          <div className="main-rules_wrapper">
            <MainRules
              img={supportImg}
              text="Оперативная и адекватная
поддержка"
            />
            <MainRules img={teamtImg} text="Опытные разработчики" />
            <MainRules img={clarityImg} text="Возможность сотрудничества" />
            <MainRules img={commentsImg} text="Гибкая ценовая политика" />
            <MainRules img={safeImg} text="Безопасность и анонимность " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
