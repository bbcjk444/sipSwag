import "./Story_ch2_15.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_15 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 16,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-16-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-16-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-16-1').innerText = sessionStorage.getItem('scence 2-16-1');
       document.getElementById('story 2-16-2').innerText = sessionStorage.getItem('scence 2-16-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story16')
  }

  return (
    <div className="ch1-121-two-fifteen">
      <div className="group-div17-two-fifteen">
        <img className="image-261-icon6-two-fifteen" alt="" src="../image 266.png" />
      </div>
      <img className="vector-icon5-two-fifteen" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-fifteen" onClick={nextstory}></div>
      <div className="div36-two-fifteen" onClick={nextstory}>
        <p className="p53-two-fifteen" id="story 2-15-1" onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch2_15;
