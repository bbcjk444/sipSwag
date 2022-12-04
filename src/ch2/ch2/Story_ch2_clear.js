import "./Story_ch2_clear.css";
import { useNavigate } from "react-router-dom";

const Story_ch2_clear = () => {
  const navigate = useNavigate();

  return (
    <div className="ch1-clear-two-final">
      <img className="icon-two-final" alt="" src="../-17-1@2x.png" />
      <div className="rectangle-div-two-final" />
      <img className="group-icon-div-two-final" alt="" src="../Group 334.png" />
      <div className="div-two-final">
        <p className="p-two-final">학교에 처음 나온 오늘 마주친 이상형 마쿠...</p>
        <p className="p-two-final">
        혹시 내 운명의 상대를 만난 게 아닐까...?
        </p>
        <p className="p-two-final">수업이 끝나면 바로 학생회관으로 달려가</p>
        <p className="p3-two-final">그 동아리부터 가입해야지!</p>
      </div>
      <img
        className="group-icon1-two-final"
        alt=""
        src="../m ch2 2.png"
      />
      <img className="group-icon2-two-final" alt="" src="../group-353.svg" />
      <img
        className="group-icon3-two-final"
        alt=""
        src="../ch3 start 1.png"
      />
    </div>
  );
};

export default Story_ch2_clear;
