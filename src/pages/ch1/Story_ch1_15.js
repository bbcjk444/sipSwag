import "./Story_ch1_15.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Story_ch1_15 = () => {
  var user_name = sessionStorage.getItem("user_name");

  const navigate = useNavigate();

  const nextstory = () => {
    navigate("/ch1clear");
  };

  return (
    <div className="ch1-15-one-fifteen">
      <div className="group-div-one-fifteen">
        <img
          className="image-255-icon-one-fifteen"
          alt=""
          src="../image-255@2x.png"
        />
        {/* <img className="image-256-icon-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-257-icon-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-258-icon-one-fifteen" alt="" src="../image-256@2x.png" />
        <img className="image-259-icon-one-fifteen" alt="" src="../image-259@2x.png" /> */}
      </div>
      <img className="vector-icon-one-fifteen" alt="" src="../vector.svg" />
      <img className="icon1-one-fifteen" alt="" src="../2-1-3@2x.png" />
      <div className="div2-one-fifteen">{user_name}</div>
      <div className="div7-one-fifteen" onClick={nextstory}>
        <p className="div3-one-fifteen" onClick={nextstory}>
          좋았어! 그럼 지금부터 계획 시작이다!
        </p>
      </div>
    </div>
  );
};

export default Story_ch1_15;
