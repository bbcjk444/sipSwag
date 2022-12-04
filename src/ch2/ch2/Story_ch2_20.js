import "./Story_ch2_20.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_20 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 21,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-21-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-21-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-21-1').innerText = sessionStorage.getItem('scence 2-21-1');
       document.getElementById('story 2-21-2').innerText = sessionStorage.getItem('scence 2-21-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story21')
  }

  return (
    <div className="ch1-121-two-twenty">
      <div className="group-div17-two-twenty">
        <img className="image-261-icon6-two-twenty" alt="" src="../image 267.png" />
      </div>
      <img className="vector-icon5-two-twenty" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-twenty" onClick={nextstory}>{user_name}</div>
      <div className="div36-two-twenty" onClick={nextstory}>
        <p className="p53-two-twenty" id="story 2-20-1" onClick={nextstory}></p>
        <p className="p54-two-twenty" id="story 2-20-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-twenty" alt="" src="../Group 370.png" />
    </div>
  );
};

export default Story_ch2_20;
