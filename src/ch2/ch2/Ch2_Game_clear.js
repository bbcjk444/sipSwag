import "./Ch2_Game_clear.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Ch2_Game_clear = () => {

  var star2 = sessionStorage.getItem('star2');
  console.log(star2);

  const navigate = useNavigate();

  var user_name = sessionStorage.getItem('user_name');

  const nextstory = () => { 
      axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 24,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-23-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-23-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       window.sessionStorage.setItem('scence 2-23-3', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));     
       document.getElementById('story 2-23-1').innerText = sessionStorage.getItem('scence 2-23-1') + " " + user_name + ", " + sessionStorage.getItem('scence 2-23-3');
       document.getElementById('story 2-23-2').innerText = sessionStorage.getItem('scence 2-23-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story23')
  }

  return (
    <div className="ch1-1-game2clear">
      <img className="image-261-icon4-game2clear" alt="" src="../image 273-1.png" />
      <img className="game2-icon-game2clear" id="star" alt="" src={star2} />
      <div className="group-div14-game2clear" onClick={nextstory}>
        <div className="rectangle-div14-game2clear" onClick={nextstory}/>
      </div>
      <img className="frame-icon-game2clear" alt="" src="../frame.svg" onClick={nextstory}/>
    </div>
  );
};

export default Ch2_Game_clear;
