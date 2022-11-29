import "./Story_ch1_start.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_start = () => {

  const navigate = useNavigate();

  console.log("유저 성별 확인 => " + sessionStorage.getItem('user_sex'));

  const storystart = () => {
     axios
     .post('http://localhost:8008/getstory', {
       scenario_num: 1,
       chapter_num: 1,
       scene_num: 1,
     })
     .then((res) => {
       console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
       window.sessionStorage.setItem('scence 1-1-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
       window.sessionStorage.setItem('scence 1-1-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
       document.getElementById('story 1-1-1').innerText = sessionStorage.getItem('scence 1-1-1');
       document.getElementById('story 1-1-2').innerText = sessionStorage.getItem('scence 1-1-2');
     })
     .catch((e) => {
       console.error(e);
     });
     navigate('/ch1story1')
  }
   
  return (
    <div className="ch-one-zero">
      <img className="icon9-one-zero" alt="" src="../-17-1@2x.png" />
      <div className="div43-one-zero" />
      <div className="div44-one-zero" />
      <img className="group-icon40-one-zero" alt="" src="../group-354.svg" onClick={storystart}/>
      <img className="m-ch1-1-one-zero" alt="" src="../m-ch1-1@2x.png" />
      <img className="group-icon41-one-zero" alt="" src="../group31.svg" />
    </div>
  );
};

export default Story_ch1_start;
