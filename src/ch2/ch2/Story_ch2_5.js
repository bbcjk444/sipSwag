import "./Story_ch2_5.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_5 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 6,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-6-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-6-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-6-1').innerText = sessionStorage.getItem('scence 2-6-1');
       document.getElementById('story 2-6-2').innerText = sessionStorage.getItem('scence 2-6-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story6')
  }

  return (
    <div className="ch1-121-two-five">
      <div className="group-div17-two-five">
        <img className="image-261-icon6-two-five" alt="" src="../image 267.png" />
      </div>
      <img className="vector-icon5-two-five" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-five" onClick={nextstory}></div>
      <div className="div36-two-five" onClick={nextstory}>
        <p className="p53-two-five" id="story 2-5-1" onClick={nextstory}></p>
        <p className="p54-two-five" id="story 2-5-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-five" alt="" src="../Group 369.png" />
    </div>
  );
};

export default Story_ch2_5;
