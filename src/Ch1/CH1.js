import "./css/CH1.css";
import mainname from "./img/mainname.png";
import mainimg from "./img/mainimg.png";
import { useState } from "react";
import Modal2 from "./Modal2";
import Modal from "./Modal";

const CH1 = () => {
  return (
    <div className="ch1-1-div" id="nj" vd="1">
      <img className="image-232-icon" alt="" src={mainimg} />
      <img className="frame-icon" alt="" src={mainname} />
      <div className="rectangle-ch1-div" align="center">
        <button id="testbutton">
          <h3 id="parkhun">start!</h3>
        </button>
      </div>
    </div>
  );
};

export default CH1;
