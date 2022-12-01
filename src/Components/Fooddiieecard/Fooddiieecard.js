import React, { useState } from "react";
import "./Fooddiieecard.scss";
import Arrowr from "../../Assets/r.png";
import Arrowl from "../../Assets/l.png";
import Cancel from "../../Assets/cancel.png";
import f1 from "../../Assets/fooddiiee/1.png";
import f2 from "../../Assets/fooddiiee/2.png";
import f3 from "../../Assets/fooddiiee/3.png";
import f4 from "../../Assets/fooddiiee/4.png";
import f5 from "../../Assets/fooddiiee/5.png";

export default function Fooddiieecard({ handleClick }) {
  const [foodcard, setFoodCard] = useState(1);

  function nextbtn() {
    let newfoodcard = foodcard + 1;
    if (foodcard == 5) newfoodcard = 1;
    setFoodCard(newfoodcard);
  }

  function prevbtn() {
    let newfoodcard = foodcard - 1;
    if (foodcard == 1) newfoodcard = 5;
    setFoodCard(newfoodcard);
  }
  return (
    <>
      <div className="preview-main-container">
        <div className="cards-main-container">
          <div className="cards-sub-container2">
            <div className={`card card1 ${foodcard == 1 ? "active" : ""}`}>
              <img src={f1} />
            </div>
            <div className={`card card2 ${foodcard == 2 ? "active" : ""}`}>
              <img src={f2} />
            </div>
            <div className={`card card3 ${foodcard == 3 ? "active" : ""}`}>
              <img src={f3} />
            </div>
            <div className={`card card4 ${foodcard == 4 ? "active" : ""}`}>
              <img src={f4} />
            </div>
            <div className={`card card4 ${foodcard == 5 ? "active" : ""}`}>
              <img src={f5} />
            </div>
          </div>
        </div>
        <div className="cards-sub-container">
          <div className="slider-btn" onClick={prevbtn}>
            <img src={Arrowl} />
          </div>
          <div className="slider-btn" onClick={handleClick}>
            <img src={Cancel} />
          </div>
          <div className="slider-btn" onClick={nextbtn}>
            <img src={Arrowr} />
          </div>
        </div>
      </div>
    </>
  );
}

// export default Fooddiieecard;
