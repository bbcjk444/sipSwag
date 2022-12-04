import "./Story_ch2_23.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_23 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    navigate('/ch2story24')
  }

  return (
    <div className="ch1-121-two-twentythree">
      <div className="group-div17-two-twentythree">
        <img className="image-261-icon6-two-twentythree" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon5-two-twentythree" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-twentythree" onClick={nextstory}>{user_name}</div>
      <div className="div36-two-twentythree" onClick={nextstory}>
        <p className="p53-two-twentythree" id="story 2-23-1" onClick={nextstory}></p>
        <p className="p54-two-twentythree" id="story 2-23-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-twentythree" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch2_23;
