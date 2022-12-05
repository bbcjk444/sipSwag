import "./Story_ch2_22.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_22 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    navigate('/ch2CardGame');
  }

  return (
    <div className="ch1-121-two-twentytwo">
      <div className="group-div17-two-twentytwo">
        <img className="image-261-icon6-two-twentytwo" alt="" src="../image 273.png" />
      </div>
      <img className="vector-icon5-two-twentytwo" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-two-twentytwo" onClick={nextstory}>{user_name}</div>
      <div className="div36-two-twentytwo" onClick={nextstory}>
        <p className="p53-two-twentytwo" id="story 2-22-1" onClick={nextstory}></p>
        <p className="p54-two-twentytwo" id="story 2-22-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-two-twentytwo" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch2_22;
