import "./css/CH2.css";
import man from "./img/man.png";
import woman from "./img/woman.png";

const CH2 = () => {
  return (
    <div className="ch1-2-div">
      <b className="b">학생증의 내 정보를 확인하자!</b>
      <b className="b1">당신의 성별은?</b>
      <img className="man" alt="" src={man} />
      <img className="woman" alt="" src={woman} />
    </div>
  );
};

export default CH2;
