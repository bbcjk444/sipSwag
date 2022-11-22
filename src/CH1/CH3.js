import "./CSS/CH3.css";
import table from "./IMG/table.png";

const CH3 = () => {
  return (
    <div className="ch3-div">
      <img className="table" alt="" src={table} />
      <div className="rectangle-ch3-div" />
      <b className="b">
        <p className="p">호다닥 컴퓨터 전원을 키고,</p>
        <p className="p1">수강신청 사이트로 들어가서 바로 로그인!</p>
      </b>
      <b className="b1">로그인을 하려면 학생증의 내 학번정보가 필요하다.</b>
    </div>
  );
};

export default CH3;
