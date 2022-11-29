import "./Story_ch1_14.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_14 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();

  const nextstory = () => {
    navigate('/ch1story15');
  }

  return (
    <div className="ch1-14-one-fourteen">
      <div className="group-div1-one-fourteen">
        <img className="image-255-icon1-one-fourteen" alt="" src="../image-255@2x.png" />
        {/* <img className="image-256-icon1-one-fourteen" alt="" src="../image-256@2x.png" />
        <img className="image-257-icon1-one-fourteen" alt="" src="../image-256@2x.png" />
        <img className="image-258-icon1-one-fourteen" alt="" src="../image-256@2x.png" />
        <img className="image-259-icon1-one-fourteen" alt="" src="../image-259@2x.png" /> */}
      </div>
      <img className="vector-icon1-one-fourteen" alt="" src="../vector1.svg" onClick={nextstory}/>
      <img className="icon2-one-fourteen" alt="" src="../2-1-3@2x.png" />
      <div className="div5-one-fourteen" onClick={nextstory}>{user_name}</div>
      <div className="div6-one-fourteen" onClick={nextstory}>
        <p className="p4-one-fourteen" id="story 1-15-1" onClick={nextstory}></p>
        <p className="p5-one-fourteen" id="story 1-15-2"  onClick={nextstory}></p>
      </div>
    </div>
  );
};

export default Story_ch1_14;
