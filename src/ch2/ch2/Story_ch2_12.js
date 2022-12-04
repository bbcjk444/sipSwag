import "./Story_ch2_12.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_12 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 13,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-13-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-13-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-13-1').innerText = sessionStorage.getItem('scence 2-13-1');
       document.getElementById('story 2-13-2').innerText = sessionStorage.getItem('scence 2-13-2');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story13')
  }

  return (
    <div className="ch1-121-two-twelve">
      <div className="group-div17-two-twelve">
        <img className="image-261-icon6-two-twelve" alt="" src="../image 266.png" />
      </div>
      <img className="vector-icon5-two-twelve" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-twelve" onClick={nextstory}>{user_name}</div>
      <div className="div36-two-twelve" onClick={nextstory}>
        <p className="p53-two-twelve" id="story 2-12-1" onClick={nextstory}></p>
        <p className="p54-two-twelve" id="story 2-12-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-twelve" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch2_12;
