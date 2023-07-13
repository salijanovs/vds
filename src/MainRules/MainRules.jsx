import "./MainRules.css";

const MainRules = ({ img, text }) => {
  return (
    <div className="main-rules">
      <img className="main-rules_img" src={img} alt="" />
      <p className="main-rules_text">{text}</p>
    </div>
  );
};

export default MainRules;
