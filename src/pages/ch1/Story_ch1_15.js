import "./Story_ch1_15.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_15 = () => {

  var user_name = sessionStorage.getItem('user_name');

  var what = sessionStorage.getItem('what');

  console.log("남은 기간 할 행동 => " + what);

  const navigate = useNavigate();

  const nextstory = () => { 
    navigate('/ch1clear');
  }

  return (
    <div className="ch1-14-one-fifteen">
      <div className="group-div1-one-fifteen">
        <img className="image-255-icon1-one-fifteen" alt="" src="../image-255@2x.png" />
        {/* <img className="image-256-icon1-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-257-icon1-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-258-icon1-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-259-icon1-one-fifteen" alt="" src="../image-259@2x.png" /> */}
      </div>
      <img className="vector-icon1-one-fifteen" alt="" src="../vector1.svg" onClick={nextstory}/>
      <img className="icon2-one-fifteen" alt="" src="../2-1-3@2x.png" />
      <div className="div5-one-fifteen" onClick={nextstory}>{user_name}</div>
      <div className="div6-one-fifteen" onClick={nextstory}>
        <p className="p4-one-fifteen" id="story 1-16-1" onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch1_15;
