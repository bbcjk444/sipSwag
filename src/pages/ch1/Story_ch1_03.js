import "./Story_ch1_03.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_03 = () => {
  
  const navigate = useNavigate();

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 4,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-4-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
     document.getElementById('story 1-4-1').innerText = sessionStorage.getItem('scence 1-4-1');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story4')
  }

  return (
    <div className="ch1-3-one-three" onClick={nextstory}>
      <b className="b9-one-three" id="story 1-3-1" onClick={nextstory}></b>
      <b className="b10-one-three" id="story 1-3-2" onClick={nextstory}></b>
    </div>
  );
};

export default Story_ch1_03;
