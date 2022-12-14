import React, { useState } from "react";
import "./Landingpage.scss";
import limage from "../../Assets/baba.png";

function Landingpage() {
  const [range, setrange] = useState(1);
  const [disablepage, setDisablePage] = useState("");

  function change(value) {
    setrange(value);
    var newOpacity = "0." + (19 - value);
    document.getElementById("container").style.opacity = newOpacity;

    if (newOpacity == 0) {
      setDisablePage("none");
    } else {
      setDisablePage("block");
    }
  }

  function TiArrowRightOutline(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        baseProfile="tiny"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M12 21c-.801 0-1.555-.312-2.121-.879s-.88-1.321-.879-2.123c0-.746.271-.998.764-1.998h-4.836c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3h4.836c-.494-1-.764-1.255-.764-2.001.001-.802.312-1.554.88-2.121 1.132-1.132 3.108-1.133 4.241.001l7.121 7.121-7.121 7.121c-.566.567-1.32.879-2.121.879zm-7.072-9c-.552 0-1 .449-1 1s.448 1 1 1h9.658l-3.293 3.293c-.189.189-.293.439-.293.706 0 .269.104.519.293.708.379.378 1.035.378 1.414 0l5.707-5.707-5.707-5.707c-.379-.378-1.035-.378-1.414 0-.189.189-.293.439-.293.706 0 .268.104.519.293.708l3.293 3.293h-9.658z" />
      </svg>
    );
  }

  return (
    <div>
      <div
        className="main-container"
        id="container"
        style={{ display: disablepage }}
      >
        {/* <div className="image-container">
          <img src={limage} alt="" />
        </div> */}
        <div className="switch-container">
          <div>
            <input
              type="range"
              min="10"
              max="19"
              className="range blue"
              value={range}
              onChange={(e) => change(e.target.value)}
            />
          </div>
        </div>
        <div className="swipe-tag">
          Swipe Right....
          <TiArrowRightOutline />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
