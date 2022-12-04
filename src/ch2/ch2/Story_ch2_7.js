import "./Story_ch2_7.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_7 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 8,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-8-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-8-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-8-1').innerText = sessionStorage.getItem('scence 2-8-1');
       document.getElementById('story 2-8-2').innerText = sessionStorage.getItem('scence 2-8-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story8')
  }

  return (
    <div className="ch1-121-two-seven">
      <div className="group-div17-two-seven">
        <img className="image-261-icon6-two-seven" alt="" src="../image 266.png" />
      </div>
      <img className="vector-icon5-two-seven" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-seven" onClick={nextstory}></div>
      <div className="div36-two-seven" onClick={nextstory}>
        <p className="p53-two-seven" id="story 2-7-1" onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch2_7;
