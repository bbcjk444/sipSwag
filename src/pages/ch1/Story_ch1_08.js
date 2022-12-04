import "./Story_ch1_08.css";
import { useNavigate } from "react-router-dom";

const Story_ch1_08 = () => {

  const navigate = useNavigate();

  const nextstory = () => {
    navigate('/ch1story9')
  }

  return (
    <div className="ch1-8-one-eight">
      <img className="image-261-icon4-one-eight" alt="" src="../스토리1 책상 지갑.jpg" />
      <div className="test" onClick={nextstory}></div>
    </div>
  );
};

export default Story_ch1_08;
