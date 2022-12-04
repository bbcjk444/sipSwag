import "./Game_ch2_result_02.css";
import { useNavigate } from "react-router-dom";

const Game_ch2_result_02 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  const nextstory = () => {
    window.sessionStorage.setItem('star2', '../game2-twostar.png')
    navigate('/ch2gameclear')
  }

  return (
    <div className="ch1-1-27950-two-result2">
      <div className="group-div19-two-result2">
        <img className="image-261-icon3-two-result2" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon4-two-result2" alt="" src="../vector4.svg" onClick={nextstory}/>
      <div className="div25-two-result2" onClick={nextstory}>{user_name}</div>
      <div className="div26-two-result2" onClick={nextstory}>
        <p className="p32-two-result2" id="story 2-result2-1" onClick={nextstory}></p>
        <p className="p33-two-result2" id="story 2-result2-2" onClick={nextstory}></p>
      </div>
      <img className="icon4-two-result2" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Game_ch2_result_02;
