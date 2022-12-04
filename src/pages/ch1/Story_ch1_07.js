import "./Story_ch1_07.css";
import { useNavigate } from "react-router-dom";

const Story_ch1_07 = () => {

  const navigate = useNavigate();

  const nextstory = () => {
    navigate('/ch1story8')
  }

  return (
    <div className="ch1-7-one-seven">
      <div className="group-div15-one-seven">
        <img className="image-261-icon8-one-seven" alt="" src="../스토리1 책상.jpg" />
      </div>
      <img className="vector-icon7-one-seven" alt="" src="../vector7.svg" onClick={nextstory}/>
      <div className="div38-one-seven" onClick={nextstory}>
        <p className="p57-one-seven" id="story 1-7-1" onClick={nextstory}></p>
        <p className="p58-one-seven" id="story 1-7-2" onClick={nextstory}></p>
      </div>
      <img className="icon7-one-seven" alt="" src="../2-1-3@2x.png" />
    </div>
  );
};

export default Story_ch1_07;
