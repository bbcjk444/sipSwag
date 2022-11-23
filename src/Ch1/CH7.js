import "./css/CH7.css";
import group from "./img/Group.png";
import man from "./img/man.png";

const CH7 = () => {
  return (
    <div className="ch1-7-div">
      <b className="a">학생증의 내 정보를 확인하자!</b>
      <b className="a1">당신의 학과는?</b>
      <b className="a2">객관식</b>
      <img className="image-241-icon" alt="" src={man} />
      <img className="group-icon" alt="" src={group} />
      <img className="group-icon1" alt="" src="../group1.svg" />
      <img className="group-icon2" alt="" src="../group2.svg" />
      <img className="group-icon3" alt="" src="../group3.svg" />
      <img className="group-icon4" alt="" src="../group4.svg" />
      <img className="group-icon5" alt="" src="../group5.svg" />
    </div>
  );
};

export default CH7;
