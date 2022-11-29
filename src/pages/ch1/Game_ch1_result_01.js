import "./Game_ch1_result_01.css";
import { useNavigate } from "react-router-dom";

const Game_ch1_result_01 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  const nextstory = () => {
    window.sessionStorage.setItem('star', '../game1-threestar.png')
    navigate('/ch1gameclear')
  }

  return (
    <div className="ch1-1-180-one-result1">
      <div className="group-div18-one-result1">
        <img className="image-261-icon5-one-result1" alt="" src="../image-2614@2x.png" />
      </div>
      <img className="vector-icon4-one-result1" alt="" src="../vector4.svg" onClick={nextstory}/>
      <div className="div33-one-result1" onClick={nextstory}>{user_name}</div>
      <div className="div34-one-result1" onClick={nextstory}>
        <p className="p51-one-result1" id="story 1-result1-1" onClick={nextstory}></p>
        <p className="p52-one-result1" id="story 1-result1-2" onClick={nextstory}></p>
      </div>
      <img className="icon5-one-result1" alt="" src="../뀨 2.png" />
    </div>
  );
};

export default Game_ch1_result_01;
