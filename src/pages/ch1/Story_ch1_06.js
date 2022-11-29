import "./Story_ch1_06.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_06 = () => {

  const navigate = useNavigate();

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 7,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-7-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-7-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      document.getElementById('story 1-7-1').innerText = sessionStorage.getItem('scence 1-7-1');
      document.getElementById('story 1-7-2').innerText = sessionStorage.getItem('scence 1-7-2');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story7')
  }

  return (
    <div className="ch1-6-one-six">
      <div className="group-div14-one-six">
        <img className="image-255-icon-one-six" alt="" src="../image-255@2x.png" />
        {/* <img className="image-256-icon-one-six" alt="" src="../image-256@2x.png" />
        <img className="image-257-icon-one-six" alt="" src="../image-256@2x.png" />
        <img className="image-258-icon-one-six" alt="" src="../image-256@2x.png" />
        <img className="image-259-icon-one-six" alt="" src="../image-259@2x.png" /> */}
      </div>
      <img className="vector-icon8-one-six" alt="" src="../vector8.svg" onClick={nextstory}/>
      <div className="div39-one-six" onClick={nextstory}>
        <p className="p59-one-six" id="story 1-6-1" onClick={nextstory}></p>
        <p className="p60-one-six" id="story 1-6-2" onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch1_06;
