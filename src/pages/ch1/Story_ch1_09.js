import "./Story_ch1_09.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Story_ch1_09 = () => {

  const user_nameRef = useRef();

  const navigate = useNavigate();
  
  const nextstory = () => {
    sessionStorage.setItem('user_name', user_nameRef.current.value);
    console.log(sessionStorage.getItem('user_name'));
    if(sessionStorage.getItem('user_name') != ''){
      navigate('/ch1story10')
    }else{
      alert('닉네임을 입력해주세요');
    }
    
  }

  return (
    <div className="ch1-9-one-nine">
    <img className="image-262-icon-one-nine" alt="" src="../스토리1 책상.jpg" />
    <img className="group-icon35-one-nine" alt="" src="../큰 마쿠.png" />
    <img className="group-icon34-one-nine" alt="" src="../Group.png" />
      <div className="rectangle-div66-one-nine" />
      <b className="b4-one-nine">닉네임을 입력하세요</b>
      <input className="b5-one-nine" type="text" size="10" maxLength="5" ref={user_nameRef}></input>
      <div className="div30-one-nine">
        한글과 영어, 숫자를 포함하여 2~5자로 만들어주세요.
      </div>
      <img className="group-icon36-one-nine" alt="" src="../group-3283.svg" onClick={nextstory}/>
    </div>
  );
};

export default Story_ch1_09;
