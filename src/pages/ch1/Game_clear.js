import "./Game_clear.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Game_clear = () => {

  var star = sessionStorage.getItem('star');

  const navigate = useNavigate();

  const nextstory = () => { axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 14,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-14-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      document.getElementById('story 1-14-1').innerText = sessionStorage.getItem('scence 1-14-1');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story13');
  }

  return (
    <div className="ch1-1-game1clear">
      <img className="image-261-icon4-game1clear" alt="" src="../image-2612@2x.png" />
      <img className="game1-icon-game1clear" id="star" alt="" src={star} />
      <div className="group-div14-game1clear" onClick={nextstory}>
        <div className="rectangle-div14-game1clear" onClick={nextstory}/>
      </div>
      <img className="frame-icon-game1clear" alt="" src="../frame.svg" onClick={nextstory}/>
    </div>
  );
};

export default Game_clear;
