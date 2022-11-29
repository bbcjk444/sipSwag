import "./Story_ch1_05.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_05 = () => {
  
  const navigate = useNavigate();

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 6,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-6-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-6-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      document.getElementById('story 1-6-1').innerText = sessionStorage.getItem('scence 1-6-1');
      document.getElementById('story 1-6-2').innerText = sessionStorage.getItem('scence 1-6-2');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story6')
  }

  return (
    <div className="ch1-5-one-five">
      <div className="group-div15-one-five">
        <img className="image-255-icon-one-five" alt="" src="../image-2551@2x.png" />
        {/* <img className="image-256-icon-one-five" alt="" src="../image-2561@2x.png" />
        <img className="image-257-icon-one-five" alt="" src="../image-2561@2x.png" />
        <img className="image-258-icon-one-five" alt="" src="../image-2561@2x.png" />
        <img className="image-259-icon-one-five" alt="" src="../image-2591@2x.png" /> */}
      </div>
      <img className="vector-icon9-one-five" alt="" src="../vector9.svg" onClick={nextstory}/>
      <div className="div41-one-five" onClick={nextstory}>
        <p className="p61-one-five" id="story 1-5-1" onClick={nextstory}></p>
        <p className="p62-one-five" id="story 1-5-2" onClick={nextstory}></p>
      </div>
      <img className="icon8-one-five" alt="" src="../-1@2x.png" />
    </div>
  );
};

export default Story_ch1_05;
