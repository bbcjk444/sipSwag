import "./css/CH10.css";
import frame from "./img/Frame.png";

const CH12 = () => {
  return (
    <div className="ch1-10-div">
      <img className="image-239-icon" alt="" src="../image-239@2x.png" />
      <div className="rectangle-div-10" />
      <b className="b">
        <p className="p">수강신청이 얼추 마무리되었다.</p>
        <p className="p1">첫 수업까지는 약 2주가 남았네!</p>
      </b>
      <img className="frame-icon" alt="" src={frame} />
    </div>
  );
};

export default CH12;
