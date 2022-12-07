import "./Story_ch2_26.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_26 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  var alacrity = Number(sessionStorage.getItem("alacrity1")) + Number(sessionStorage.getItem("alacrity2")) + Number(sessionStorage.getItem("alacrity-game1")) + Number(sessionStorage.getItem("alacrity3"));
  var observation = Number(sessionStorage.getItem("observation1")) + Number(sessionStorage.getItem("observation2")) + Number(sessionStorage.getItem("observation-game1")) + Number(sessionStorage.getItem("observation3")) + Number(sessionStorage.getItem("observation-game2"));
  var logical = Number(sessionStorage.getItem("logical1")) + Number(sessionStorage.getItem("logical2")) + Number(sessionStorage.getItem("logical3"));
  var ability = Number(sessionStorage.getItem("ability1")) + Number(sessionStorage.getItem("ability2")) + Number(sessionStorage.getItem("ability3"));

  console.log("순발 총점 => " + alacrity);
  console.log("관찰 총점 => " + observation);
  console.log("논리 총점 => " + logical);
  console.log("사고 총점 => " + ability);

  const nextstory = () => {
    window.sessionStorage.setItem('allalacrity', alacrity);
    window.sessionStorage.setItem('allobservation', observation);
    window.sessionStorage.setItem('alllogical', logical);
    window.sessionStorage.setItem('allability', ability);
    navigate('/ch2clear')
  }

  return (
    <div className="ch1-121-two-twentysix">
      <div className="group-div17-two-twentysix">
        <img className="image-261-icon6-two-twentysix" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon5-two-twentysix" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-twentysix" onClick={nextstory}>{user_name}</div>
      <div className="div36-two-twentysix" onClick={nextstory}>
        <p className="p53-two-twentysix" id="story 2-26-1" onClick={nextstory}></p>
        <p className="p54-two-twentysix" id="story 2-26-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-twentysix" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch2_26;
