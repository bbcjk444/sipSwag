import "./Story_ch2_14.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_14 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 15,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-15-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       document.getElementById('story 2-15-1').innerText = sessionStorage.getItem('scence 2-15-1');
     })
     .catch((e) => {
       console.error(e);
     });
    navigate('/ch2story15')
  }

  return (
    <div className="ch1-121-two-fourteen">
      <div className="group-div17-two-fourteen">
        <img className="image-261-icon6-two-fourteen" alt="" src="../image 266.png" />
      </div>
      <img className="vector-icon5-two-fourteen" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-fourteen" onClick={nextstory}>???</div>
      <div className="div36-two-fourteen" onClick={nextstory}>
        <p className="p53-two-fourteen" id="story 2-14-1" onClick={nextstory}></p>
        <p className="p54-two-fourteen" id="story 2-14-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-fourteen" alt="" src="../2-2 1.png" />
    </div>
  );
};

export default Story_ch2_14;
