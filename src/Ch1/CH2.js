import "./css/CH2.css";
import leftlight from "./img/leftlight.png";
import rightlight from "./img/rightlight.png";

const CH2 = () => {
  return (
    <div className="ch1-1-div">
      <div className="rectangle-div" />
      <img className="polygon-icon" alt="" src="../polygon-17.svg" />
      <b className="b">
        <p className="p">띠리리링....띠리리링.......시끄러운 알람소리.....</p>
        <p className="p">오늘 무슨 날인가? 오늘...오늘....오늘은..</p>
        <p className="p">&nbsp;</p>
        <p className="p2">수강신청일이다!!!!!!!!!!!!!</p>
      </b>
      <img className="image-237-icon" alt="" src={leftlight} />
      <img className="image-238-icon" alt="" src={rightlight} />
    </div>
  );
};

export default CH2;
