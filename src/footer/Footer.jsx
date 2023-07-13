import "./footer.css";
import bg from "./../imgs/Navbar/Лого.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <a href="#!">
            <img src={bg} alt="" />
          </a>
          <p className="footer-text">
            © Все права защищены. All Rights Reserved. 2021 BetVDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
