import "./Game_ch1_play_01.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Game_ch1_play_01 = () => {

  const navigate = useNavigate();

  window.sessionStorage.setItem('timescore',37);

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 13,
    })
    .then((res) => {
      console.log('임의값 확인 => ' + sessionStorage.getItem('timescore'));
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      if(sessionStorage.getItem('timescore') <= 20){
        window.sessionStorage.setItem('scence 1-result1-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-result1-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
        document.getElementById('story 1-result1-1').innerText = sessionStorage.getItem('scence 1-result1-1');
        document.getElementById('story 1-result1-2').innerText = sessionStorage.getItem('scence 1-result1-2');
      }else if(sessionStorage.getItem('timescore') > 20 && sessionStorage.getItem('timescore') <= 30){
        window.sessionStorage.setItem('scence 1-result2-1', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-result2-2', JSON.stringify(res.data[3].speak_story).substring(1,JSON.stringify(res.data[3].speak_story).length-1));
        document.getElementById('story 1-result2-1').innerText = sessionStorage.getItem('scence 1-result2-1');
        document.getElementById('story 1-result2-2').innerText = sessionStorage.getItem('scence 1-result2-2');
      }else if(sessionStorage.getItem('timescore') > 31){
        window.sessionStorage.setItem('scence 1-result3-1', JSON.stringify(res.data[4].speak_story).substring(1,JSON.stringify(res.data[4].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-result3-2', JSON.stringify(res.data[5].speak_story).substring(1,JSON.stringify(res.data[5].speak_story).length-1));
        document.getElementById('story 1-result3-1').innerText = sessionStorage.getItem('scence 1-result3-1');
        document.getElementById('story 1-result3-2').innerText = sessionStorage.getItem('scence 1-result3-2');
      }
     })
    .catch((e) => {
      console.error(e);
    });
    if(sessionStorage.getItem('timescore') <= 20){
      navigate('/ch1result1')
    }else if(sessionStorage.getItem('timescore') > 20 && sessionStorage.getItem('timescore') <= 30){
      navigate('/ch1result2')
    }else if(sessionStorage.getItem('timescore') > 31){
      navigate('/ch1result3')
    }
  }

  return (
    <div className="ch1-14-one-game1">
      <img className="icon4-one-game1" alt="" src="../1-2@2x.png" />
      <div className="rectangle-div67-one-game1" />
      <img className="game1-icon-one-game1" alt="" src="../game1.svg" />
      <div className="div31-one-game1">
        <p className="p46-one-game1">내가 들을 과목들은 미리 메모지에 적어 놓았다!</p>
        <p className="p47-one-game1">
          메모지에 적힌 순서대로 과목들을 빠르게 터치하여 올클에 성공해보자.
        </p>
      </div>
      <div className="div32-one-game1">
        <p className="p48-one-game1">게임은 9칸으로 나뉘어있는 정사각형 위에</p>
        <p className="p49-one-game1">수강 과목과 번호가 함께 적혀져있습니다.</p>
        <p className="p50-one-game1">번호를 내림차순으로 터치해서 수강을 신청해주세요!</p>
      </div>
      <img className="image-264-icon-one-game1" alt="" src="../image-264@2x.png" />
      <img className="ellipse-icon-one-game1" alt="" src="../ellipse-91.svg" />
      <img className="frame-icon-one-game1" alt="" src="../game1Frame.png" />
      <img className="group-icon37-one-game1" alt="" src="../group-3284.svg" onClick={nextstory}/>
      <img className="image-265-icon-one-game1" alt="" src="../image-265@2x.png" />
    </div>
  );
};

export default Game_ch1_play_01;
