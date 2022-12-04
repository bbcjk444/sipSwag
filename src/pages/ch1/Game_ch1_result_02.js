import "./Game_ch1_result_02.css";
import { useNavigate } from "react-router-dom";

const Game_ch1_result_02 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  const nextstory = () => {
    window.sessionStorage.setItem('star1', '../game1-twostar.png')
    navigate('/ch1gameclear')
  }

  return (
    <div className="ch1-1-27950-one-result2">
      <div className="group-div19-one-result2">
        <img className="image-261-icon3-one-result2" alt="" src="../스토리1 책상.jpg" />
      </div>
      <img className="vector-icon4-one-result2" alt="" src="../vector4.svg" onClick={nextstory}/>
      <div className="div25-one-result2" onClick={nextstory}>{user_name}</div>
      <div className="div26-one-result2" onClick={nextstory}>
        <p className="p32-one-result2" id="story 1-result2-1" onClick={nextstory}></p>
        <p className="p33-one-result2" id="story 1-result2-2" onClick={nextstory}></p>
      </div>
      <img className="icon4-one-result2" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Game_ch1_result_02;
