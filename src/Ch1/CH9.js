import "./css/CH9.css";
import enrolment1 from "./img/enrolment1.png";
import enrolment2 from "./img/enrolment2.png";
import enrolment3 from "./img/enrolment3.png";

const CH9 = () => {
  return (
    <div className="ch1-9-div">
      <div className="rectangle-ch9-div1" />
      <b className="game-1-b">Game 1.</b>
      <div className="rectangle-ch9-div2" />
      <img className="group-icon" alt="" src={enrolment1} />
      <img className="group-icon1" alt="" src={enrolment2} />
      <img className="group-icon2" alt="" src={enrolment3} />
    </div>
  );
};

export default CH9;
