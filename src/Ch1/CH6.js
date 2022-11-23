import "./css/CH6.css";
import man from "./img/man.png";

const CH6 = () => {
  return (
    <div className="ch1-6-div">
      <b className="b">학생증의 내 정보를 확인하자!</b>
      <b className="b1">당신의 이름은?</b>
      <img className="image-241-icon2" alt="" src={man} />
      <div className="rectangle-div-6" />
      <b className="input-b">(input)</b>
    </div>
  );
};

export default CH6;
