import "./Main_01.css";
import { useNavigate } from "react-router-dom";

const Main_01 = () => {

  const navigate = useNavigate();

  const genderselect = () => {
    navigate('/main02');
  }

  return (
    <div className="div-main1">
      <div className="group-div-main1">
        <img className="image-232-icon-main" alt="" src="../image-232@2x.png" />
      </div>
      <img className="group-icon-main50" alt="" src="../group-3541.svg" onClick={genderselect}/>
      <img className="group-icon-main51" alt="" src="../Group 334.png" />
    </div>
  );
};

export default Main_01;
