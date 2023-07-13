import "./app.css";
import { createContext, useState } from "react";
import Header from "../header/Header";
import Advantages from "../advantages/Advantages";
import Info from "../info/Info";
import Cost from "../cost/Cost";
import Selection from "../selection/Selection";
import Question from "../question/Question";
import Footer from "../footer/Footer";
import Payment from "../payment/Payment";

export const MyContext = createContext();

const App = () => {
  const [isOffBar, setIsOffBar] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [productPrice, setProductPrice] = useState();

  document.body.onclick = (e) => {
    e.target.className.includes("close-img") ||
    e.target.className.includes("side-bar")
      ? setIsOffBar(isOffBar)
      : setIsOffBar(false);
    e.target.id === "payment" ? setOpenPay(false) : setOpenPay(openPay);
  };

  return (
    <div className="app">
      <MyContext.Provider
        value={{
          isOffBar,
          setIsOffBar,
          openPay,
          setOpenPay,
          productPrice,
          setProductPrice,
        }}
      >
        <Header />
        <Advantages />
        <Info />
        <Cost />
        <Selection />
        <Question />
        <Footer />
        {openPay ? <Payment /> : ""}
      </MyContext.Provider>
    </div>
  );
};

export default App;
