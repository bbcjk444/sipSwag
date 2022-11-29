import "./Story_ch1_13.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_13 = () => {

  const navigate = useNavigate();
  
  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 15,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-15-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-15-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      document.getElementById('story 1-15-1').innerText = sessionStorage.getItem('scence 1-15-1');
      document.getElementById('story 1-15-2').innerText = sessionStorage.getItem('scence 1-15-2');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story14')
  }

  return (
    <div className="ch1-13-one-thirteen">
      <div className="group-div2-one-thirteen">
        <img className="image-255-icon2-one-thirteen" alt="" src="../image-255@2x.png" />
        {/* <img className="image-256-icon2-one-thirteen" alt="" src="../image-256@2x.png" />
        <img className="image-257-icon2-one-thirteen" alt="" src="../image-256@2x.png" />
        <img className="image-258-icon2-one-thirteen" alt="" src="../image-256@2x.png" />
        <img className="image-259-icon2-one-thirteen" alt="" src="../image-259@2x.png" /> */}
      </div>
      <img className="vector-icon2-one-thirteen" alt="" src="../vector2.svg" onClick={nextstory}/>
      <div className="div39-one-thirteen" onClick={nextstory}>
        <p className="div8-one-thirteen" id="story 1-14-1" onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch1_13;
