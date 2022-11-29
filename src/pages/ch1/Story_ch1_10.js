import "./Story_ch1_10.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_10_1_1 = () => {

  var user_name = sessionStorage.getItem('user_name');

  console.log('유저 이름 확인 => ' + sessionStorage.getItem('user_name'));

  const navigate = useNavigate();

  const select_one = () => {
    window.sessionStorage.setItem('department', '공연전시마스터학과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-one-one').style.color = "white";
    document.getElementById('class-one-two').style.color = "yellow";
    document.getElementById('class-two-one').style.color = "black";
    document.getElementById('class-two-two').style.color = "black";
    document.getElementById('class-three-one').style.color = "black";
    document.getElementById('class-three-two').style.color = "black";
    document.getElementById('class-four-one').style.color = "black";
    document.getElementById('class-four-two').style.color = "black";
    document.getElementById('class-five-one').style.color = "black";
    document.getElementById('class-five-two').style.color = "black";
    document.getElementById('class-six-one').style.color = "black";
    document.getElementById('class-six-two').style.color = "black";
  }
  const select_two = () => {
    window.sessionStorage.setItem('department', '탐구발명천재학과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-one-one').style.color = "black";
    document.getElementById('class-one-two').style.color = "black";
    document.getElementById('class-two-one').style.color = "white";
    document.getElementById('class-two-two').style.color = "yellow";
    document.getElementById('class-three-one').style.color = "black";
    document.getElementById('class-three-two').style.color = "black";
    document.getElementById('class-four-one').style.color = "black";
    document.getElementById('class-four-two').style.color = "black";
    document.getElementById('class-five-one').style.color = "black";
    document.getElementById('class-five-two').style.color = "black";
    document.getElementById('class-six-one').style.color = "black";
    document.getElementById('class-six-two').style.color = "black";
  }
  const select_three = () => {
    window.sessionStorage.setItem('department', '세계공인인싸학과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-one-one').style.color = "black";
    document.getElementById('class-one-two').style.color = "black";
    document.getElementById('class-two-one').style.color = "black";
    document.getElementById('class-two-two').style.color = "black";
    document.getElementById('class-three-one').style.color = "white";
    document.getElementById('class-three-two').style.color = "yellow";
    document.getElementById('class-four-one').style.color = "black";
    document.getElementById('class-four-two').style.color = "black";
    document.getElementById('class-five-one').style.color = "black";
    document.getElementById('class-five-two').style.color = "black";
    document.getElementById('class-six-one').style.color = "black";
    document.getElementById('class-six-two').style.color = "black";
  }
  const select_four = () => {
    window.sessionStorage.setItem('department', 'CEO리더멋쟁이학과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-one-one').style.color = "black";
    document.getElementById('class-one-two').style.color = "black";
    document.getElementById('class-two-one').style.color = "black";
    document.getElementById('class-two-two').style.color = "black";
    document.getElementById('class-three-one').style.color = "black";
    document.getElementById('class-three-two').style.color = "black";
    document.getElementById('class-four-one').style.color = "white";
    document.getElementById('class-four-two').style.color = "yellow";
    document.getElementById('class-five-one').style.color = "black";
    document.getElementById('class-five-two').style.color = "black";
    document.getElementById('class-six-one').style.color = "black";
    document.getElementById('class-six-two').style.color = "black";
  }
  const select_five = () => {
    window.sessionStorage.setItem('department', '특수요원양성학과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-one-one').style.color = "black";
    document.getElementById('class-one-two').style.color = "black";
    document.getElementById('class-two-one').style.color = "black";
    document.getElementById('class-two-two').style.color = "black";
    document.getElementById('class-three-one').style.color = "black";
    document.getElementById('class-three-two').style.color = "black";
    document.getElementById('class-four-one').style.color = "black";
    document.getElementById('class-four-two').style.color = "black";
    document.getElementById('class-five-one').style.color = "white";
    document.getElementById('class-five-two').style.color = "yellow";
    document.getElementById('class-six-one').style.color = "black";
    document.getElementById('class-six-two').style.color = "black";
  }
  const select_six = () => {
    window.sessionStorage.setItem('department', '공직자다이렉트과');
    document.getElementsByClassName('rectangle-div60-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-ten')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-ten')[0].style.backgroundColor = "#147176";
    document.getElementById('class-one-one').style.color = "black";
    document.getElementById('class-one-two').style.color = "black";
    document.getElementById('class-two-one').style.color = "black";
    document.getElementById('class-two-two').style.color = "black";
    document.getElementById('class-three-one').style.color = "black";
    document.getElementById('class-three-two').style.color = "black";
    document.getElementById('class-four-one').style.color = "black";
    document.getElementById('class-four-two').style.color = "black";
    document.getElementById('class-five-one').style.color = "black";
    document.getElementById('class-five-two').style.color = "black";
    document.getElementById('class-six-one').style.color = "white";
    document.getElementById('class-six-two').style.color = "yellow";
  }

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 11,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-11-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-11-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-11-3', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-11-4', JSON.stringify(res.data[3].speak_story).substring(1,JSON.stringify(res.data[3].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-11-5', JSON.stringify(res.data[4].speak_story).substring(1,JSON.stringify(res.data[4].speak_story).length-1));
      window.sessionStorage.setItem('scence 1-11-6', JSON.stringify(res.data[5].speak_story).substring(1,JSON.stringify(res.data[5].speak_story).length-1));
      if(sessionStorage.getItem('department') === '공연전시마스터학과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-1');
      }else if(sessionStorage.getItem('department') === '탐구발명천재학과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-2');
      }else if(sessionStorage.getItem('department') === '세계공인인싸학과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-3');
      }else if(sessionStorage.getItem('department') === 'CEO리더멋쟁이학과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-4');
      }else if(sessionStorage.getItem('department') === '특수요원양성학과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-5');
      }else if(sessionStorage.getItem('department') === '공직자다이렉트과'){
        document.getElementById('story 1-11-2').innerText = sessionStorage.getItem('scence 1-11-6');
      }
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch1story11');
  }

  return (
    <div className="ch1-10-3-one-ten">
      <img className="image-261-icon3-one-ten" alt="" src="../image-261@2x.png" />
      <div className="group-div8-one-ten">
        <div className="rectangle-div61-one-ten" onClick={select_two}>
        <div className="div24-one-ten" >
          <p className="p35-one-ten" id="class-two-one">
            <span>세상에 없던 물질을 탐구하고 발명해내는</span>
          </p>
          <p className="p36-one-ten" id="class-two-two" >
            <b>탐구발명천재학과</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div9-one-ten">
        <div className="rectangle-div62-one-ten" onClick={select_three}>
        <div className="div25-one-ten">
          <p className="p35-one-ten" id="class-three-one">
            <span>세계 여러 나라를 돌아다니며 친구를 사귈 수 있는</span>
          </p>
          <p className="p36-one-ten" id="class-three-two">
            <b>세계공인인싸학과</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div10-one-ten">
        <div className="rectangle-div63-one-ten" onClick={select_four}>
        <div className="ceo-div1-one-ten">
          <p className="p35-one-ten" id="class-four-one">
            <span> 통찰력과 리더십을 가진 기업 최정상 꿈나무</span>
          </p>
          <p className="p36-one-ten" id="class-four-two">
            <b>CEO리더멋쟁이학과</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div11-one-ten">
        <div className="rectangle-div65-one-ten" onClick={select_six}>
        <div className="div26-one-ten">
          <p className="p35-one-ten" id="class-six-one">
            <span>빈틈없는 인재들의 안정적인 삶을 보장하는</span>
          </p>
          <p className="p36-one-ten" id="class-six-two">
            <b>공직자다이렉트학과</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div12-one-ten">
        <div className="rectangle-div64-one-ten" onClick={select_five}>
        <div className="div27-one-ten">
          <p className="p35-one-ten" id="class-five-one">
            <span>건장한 신체(3대 500)와 명석한 두뇌 두 마리 토끼 킬러</span>
          </p>
          <p className="p36-one-ten" id="class-five-two">
            <b>특수요원양성학과</b>
          </p>
          </div>
        </div>
      </div>
      <div className="group-div13-one-ten">
        <div className="rectangle-div60-one-ten" onClick={select_one}>
        <div className="div28-one-ten">
          <p className="p35-one-ten" id="class-one-one">
            <span>뮤지컬, 전시회, 콘서트 등 다양한 예술을 관람하는</span>
          </p>
          <p className="p36-one-ten" id="class-one-two">
            <b>공연전시마스터학과</b>
          </p>
        </div>
        </div>
      </div>
      <img className="group-icon33-one-ten" alt="" src="../Group 328.png" onClick={nextstory}/>
      <img className="group-icon34-one-ten" alt="" src="../group8.svg" />
      <div className="div29-one-ten">
        본인의 적성/관심사와 가장 가까운 학과를 선택해주세요.
      </div>
      <img className="group-icon35-one-ten" alt="" src="../group9.svg" />
      <b className="b3-one-ten">{user_name}님의 학과를 선택해주세요.</b>
    </div>
  );
};

export default Story_ch1_10_1_1;
