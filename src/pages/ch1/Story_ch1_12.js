import "./Story_ch1_12.css";
import { useNavigate } from "react-router-dom";

const Story_ch1_12 = () => {

  var user_name = sessionStorage.getItem('user_name');

  const navigate = useNavigate();
  
  const nextstory = () => {
    navigate('/ch1game1')
  }

  return (
    <div className="ch1-121-one-twelve">
      <div className="group-div17-one-twelve">
        <img className="image-261-icon6-one-twelve" alt="" src="../스토리1 책상.jpg" />
      </div>
      <img className="vector-icon5-one-twelve" alt="" src="../vector5.svg" onClick={nextstory}/>
      <div className="div35-one-twelve" onClick={nextstory}>{user_name}</div>
      <div className="div36-one-twelve" onClick={nextstory}>
        <p className="p53-one-twelve" id="story 1-12-1" onClick={nextstory}></p>
        <p className="p54-one-twelve" id="story 1-12-2" onClick={nextstory}></p>
      </div>
      <img className="icon6-one-twelve" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch1_12;
