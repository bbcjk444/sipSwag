import "./Story_ch2_26.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_26 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
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
