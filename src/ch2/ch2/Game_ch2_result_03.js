import "./Game_ch2_result_03.css";
import { useNavigate } from "react-router-dom";

const Game_ch2_result_03 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    window.sessionStorage.setItem('star2', '../game2-onestar.png')
    navigate('/ch2gameclear')
  }
  return (
    <div className="ch1-1-3490-two-result3">
      <div className="group-div19-two-result3">
        <img className="image-261-icon2-two-result3" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon3-two-result3" alt="" src="../vector3.svg" onClick={nextstory}/>
      <div className="div23-two-result3" onClick={nextstory}>{user_name}</div>
      <div className="div24-two-result3" onClick={nextstory}>
        <p className="p30-two-result3" id="story 2-result3-1" onClick={nextstory}></p>
        <p className="p31-two-result3" id="story 2-result3-2" onClick={nextstory}></p>
      </div>
      <img className="icon3-two-result3" alt="" src="../-2@2x.png" />
    </div>
  );
};

export default Game_ch2_result_03;
