import "./Game_ch1_result_03.css";
import { useNavigate } from "react-router-dom";

const Game_ch1_result_03 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    window.sessionStorage.setItem('star', '../game1-onestar.png')
    navigate('/ch1gameclear')
  }
  return (
    <div className="ch1-1-3490-one-result3">
      <div className="group-div19-one-result3">
        <img className="image-261-icon2-one-result3" alt="" src="../image-2612@2x.png" />
      </div>
      <img className="vector-icon3-one-result3" alt="" src="../vector3.svg" onClick={nextstory}/>
      <div className="div23-one-result3" onClick={nextstory}>{user_name}</div>
      <div className="div24-one-result3" onClick={nextstory}>
        <p className="p30-one-result3" id="story 1-result3-1" onClick={nextstory}></p>
        <p className="p31-one-result3" id="story 1-result3-2" onClick={nextstory}></p>
      </div>
      <img className="icon3-one-result3" alt="" src="../-2@2x.png" />
    </div>
  );
};

export default Game_ch1_result_03;
