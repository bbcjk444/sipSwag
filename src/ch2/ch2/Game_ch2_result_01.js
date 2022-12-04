import "./Game_ch2_result_01.css";
import { useNavigate } from "react-router-dom";

const Game_ch2_result_01 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  const nextstory = () => {
    window.sessionStorage.setItem('star2', '../game2-threestar.png')
    navigate('/ch2gameclear')
  }

  return (
    <div className="ch1-1-180-two-result1">
      <div className="group-div18-two-result1">
        <img className="image-261-icon5-two-result1" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon4-two-result1" alt="" src="../vector4.svg" onClick={nextstory}/>
      <div className="div33-two-result1" onClick={nextstory}>{user_name}</div>
      <div className="div34-two-result1" onClick={nextstory}>
        <p className="p51-two-result1" id="story 2-result1-1" onClick={nextstory}></p>
        <p className="p52-two-result1" id="story 2-result1-2" onClick={nextstory}></p>
      </div>
      <img className="icon5-two-result1" alt="" src="../뀨 2.png" />
    </div>
  );
};

export default Game_ch2_result_01;
