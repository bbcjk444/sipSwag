import "./Game_ch1_play_01.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Game_ch1_play_01 = () => {

  const navigate = useNavigate();

  window.sessionStorage.setItem('timescore',37);

  const nextstory = () => {
    navigate('/game1')
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
