import "./Story_ch1_11.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_11 = () => {

  var user_name = sessionStorage.getItem('user_name');
  var department1 = sessionStorage.getItem('department1');

  const navigate = useNavigate();

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 12,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-12-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-12-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      document.getElementById('story 1-12-1').innerText = sessionStorage.getItem('scence 1-12-1');
      document.getElementById('story 1-12-2').innerText = sessionStorage.getItem('scence 1-12-2');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story12');
  }

  return (
    <div className="ch1-111-one-eleven">
      <div className="group-div16-one-eleven">
        <img className="image-261-icon7-one-eleven" alt="" src="../스토리1 책상.jpg" />
      </div>
      <img className="vector-icon6-one-eleven" alt="" src="../vector6.svg" onClick={nextstory}/>
      <div className="div37-one-eleven" onClick={nextstory}>
        <p className="p55-one-eleven" onClick={nextstory}>나 {user_name},</p>
        <p className="p56-one-eleven" id="story 1-11-2" onClick={nextstory}></p>
      </div>
      <img className="group-icon38-one-eleven" alt="" src="../group29.svg" />
      <img className="group-icon39-one-eleven" alt="" src="../작은 마쿠.png" />
      <b className="b6-one-eleven">{user_name}</b>
      <b className="b7-one-eleven">{department1}</b>
      <div className="inssamacu-div-one-eleven">2023INSSAMACU</div>
    </div>
  );
};

export default Story_ch1_11;
