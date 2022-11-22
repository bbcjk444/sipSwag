import "./CSS/CH1.css";
import ch1 from "./IMG/ch1-1.png";
import ch2 from "./IMG/ch1-2.png";

const CH1 = () => {
  return (
    <div className="ch1-div">
      <div className="rectangle-ch1-div" />
      <b className="b">
        <p className="p">띠리리링....띠리리링.......시끄러운 알람소리.....</p>
        <p className="p">오늘 무슨 날인가? 오늘...오늘....오늘은..</p>
        <p className="p">&nbsp;</p>
        <p className="p2">수강신청일이다!!!!!!!!!!!!!</p>
      </b>
      <img className="image-237-icon" alt="" src={ch1} />
      <img className="image-238-icon" alt="" src={ch2} />
    </div>
  );
};

export default CH1;
