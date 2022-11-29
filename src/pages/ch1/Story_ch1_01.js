import "./Story_ch1_01.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_01 = () => {
  
  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 2,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-2-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-2-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));     
      document.getElementById('story 1-2-1').innerText = sessionStorage.getItem('scence 1-2-1');
      document.getElementById('story 1-2-2').innerText = sessionStorage.getItem('scence 1-2-2');
    })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story2')
  }

  return (
    <div className="ch1-15-one-one" onClick={nextstory}>
      <b className="b13-one-one" id="story 1-1-1" onClick={nextstory}></b>
      <b className="b14-one-one" id="story 1-1-2" onClick={nextstory}></b>
    </div>
  );
};

export default Story_ch1_01;
