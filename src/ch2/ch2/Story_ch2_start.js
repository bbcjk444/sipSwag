import "./Story_ch2_start.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_start = () => {

  const navigate = useNavigate();

  const storystart = () => {
     axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 2,
       scene_num: 1,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 2-1-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 2-1-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 2-1-1').innerText = sessionStorage.getItem('scence 2-1-1');
       document.getElementById('story 2-1-2').innerText = sessionStorage.getItem('scence 2-1-2');
     })
     .catch((e) => {
       console.error(e);
     });
     navigate('/ch2story1')
  }
   
  return (
    <div className="ch-one-zero">
      <img className="icon9-two-zero" alt="" src="../-17-1@2x.png" />
      <div className="div43-twoe-zero" />
      <div className="div44-two-zero" />
      <img className="group-icon40-two-zero" alt="" src="../group-354.svg" onClick={storystart}/>
      <img className="m-ch1-1-two-zero" alt="" src="../m ch2 1.png" />
      <img className="group-icon41-two-zero" alt="" src="../ch2Frame.png" />
    </div>
  );
};

export default Story_ch2_start;
