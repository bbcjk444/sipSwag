import "./Story_ch1_08.css";
import { useNavigate } from "react-router-dom";

const Story_ch1_08 = () => {

  const navigate = useNavigate();

  const nextstory = () => {
    navigate('/ch1story9')
  }

  return (
    <div className="ch1-8-one-eight">
      <img className="image-261-icon4-one-eight" alt="" src="../image-2614@2x.png" />
      <div className="test" onClick={nextstory}></div>
    </div>
  );
};

export default Story_ch1_08;
