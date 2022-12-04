import "./Story_ch1_clear.css";
import { useNavigate } from "react-router-dom";

const Story_ch1_clear = () => {
  const navigate = useNavigate();

  const nextstory = () => {
    navigate('/ch2start');
  }

  return (
    <div className="ch1-clear-one-final">
      <img className="icon-one-final" alt="" src="../-17-1@2x.png" />
      <div className="rectangle-div-one-final" />
      <img className="group-icon-div-one-final" alt="" src="../Group 334.png" />
      <div className="div-one-final">
        <p className="p-one-final">수강신청도, 개강까지의 계획도 완벽해.</p>
        <p className="p-one-final">
          이제 2주가 지나면 본격적인 대학생활이 시작된다.
        </p>
        <p className="p-one-final">어떤 일들이 날 기다리고 있을까!</p>
        <p className="p3-one-final">너무 설레고 긴장된다😆</p>
      </div>
      <div className="rectangle-div1-one-final" onClick={nextstory}/>
      <img
        className="group-icon1-one-final"
        alt=""
        src="../Group-icon1-two.png"
      />
      <img className="group-icon2-one-final" alt="" src="../group-353.svg" />
      <img
        className="group-icon3-one-final"
        alt=""
        src="../Group-icon3-two.png"
        onClick={nextstory}
      />
    </div>
  );
};

export default Story_ch1_clear;
