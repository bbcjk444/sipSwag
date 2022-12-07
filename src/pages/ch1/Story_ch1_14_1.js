import "./Story_ch1_14_1.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch1_14_1 = () => {
  var user_name = sessionStorage.getItem('user_name');

  console.log('유저 이름 확인 => ' + sessionStorage.getItem('user_name'));

  const navigate = useNavigate();

  const select_one = () => {
    window.sessionStorage.setItem('what', '마음의 소양을 쌓는 취미생활을 즐기자!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-fourteen-one-one').style.color = "white";
    document.getElementById('class-fourteen-one-two').style.color = "yellow";
    document.getElementById('class-fourteen-two-one').style.color = "black";
    document.getElementById('class-fourteen-two-two').style.color = "black";
    document.getElementById('class-fourteen-three-one').style.color = "black";
    document.getElementById('class-fourteen-three-two').style.color = "black";
    document.getElementById('class-fourteen-four-one').style.color = "black";
    document.getElementById('class-fourteen-four-two').style.color = "black";
    document.getElementById('class-fourteen-five-one').style.color = "black";
    document.getElementById('class-fourteen-five-two').style.color = "black";
    document.getElementById('class-fourteen-six-one').style.color = "black";
    document.getElementById('class-fourteen-six-two').style.color = "black";
    window.sessionStorage.setItem('alacrity2',10);
    window.sessionStorage.setItem('observation2',10);
    window.sessionStorage.setItem('logical2',0);
    window.sessionStorage.setItem('ability2',0);  
  }
  const select_two = () => {
    window.sessionStorage.setItem('what', '전공책을 미리 사서 예습해보자!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-fourteen-one-one').style.color = "black";
    document.getElementById('class-fourteen-one-two').style.color = "black";
    document.getElementById('class-fourteen-two-one').style.color = "white";
    document.getElementById('class-fourteen-two-two').style.color = "yellow";
    document.getElementById('class-fourteen-three-one').style.color = "black";
    document.getElementById('class-fourteen-three-two').style.color = "black";
    document.getElementById('class-fourteen-four-one').style.color = "black";
    document.getElementById('class-fourteen-four-two').style.color = "black";
    document.getElementById('class-fourteen-five-one').style.color = "black";
    document.getElementById('class-fourteen-five-two').style.color = "black";
    document.getElementById('class-fourteen-six-one').style.color = "black";
    document.getElementById('class-fourteen-six-two').style.color = "black";
    window.sessionStorage.setItem('alacrity2',0);
    window.sessionStorage.setItem('observation2',10);
    window.sessionStorage.setItem('logical2',0);
    window.sessionStorage.setItem('ability2',10);  
  }
  const select_three = () => {
    window.sessionStorage.setItem('what', '단과 대화방에서 잡힌 번개모임에 가야지!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-fourteen-one-one').style.color = "black";
    document.getElementById('class-fourteen-one-two').style.color = "black";
    document.getElementById('class-fourteen-two-one').style.color = "black";
    document.getElementById('class-fourteen-two-two').style.color = "black";
    document.getElementById('class-fourteen-three-one').style.color = "white";
    document.getElementById('class-fourteen-three-two').style.color = "yellow";
    document.getElementById('class-fourteen-four-one').style.color = "black";
    document.getElementById('class-fourteen-four-two').style.color = "black";
    document.getElementById('class-fourteen-five-one').style.color = "black";
    document.getElementById('class-fourteen-five-two').style.color = "black";
    document.getElementById('class-fourteen-six-one').style.color = "black";
    document.getElementById('class-fourteen-six-two').style.color = "black";
    window.sessionStorage.setItem('alacrity2',0);
    window.sessionStorage.setItem('observation2',0);
    window.sessionStorage.setItem('logical2',10);
    window.sessionStorage.setItem('ability2',10);  
  }
  const select_four = () => {
    window.sessionStorage.setItem('what', '자격증을 먼저 부순다. 지금부터 공부 시작!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-fourteen-one-one').style.color = "black";
    document.getElementById('class-fourteen-one-two').style.color = "black";
    document.getElementById('class-fourteen-two-one').style.color = "black";
    document.getElementById('class-fourteen-two-two').style.color = "black";
    document.getElementById('class-fourteen-three-one').style.color = "black";
    document.getElementById('class-fourteen-three-two').style.color = "black";
    document.getElementById('class-fourteen-four-one').style.color = "white";
    document.getElementById('class-fourteen-four-two').style.color = "yellow";
    document.getElementById('class-fourteen-five-one').style.color = "black";
    document.getElementById('class-fourteen-five-two').style.color = "black";
    document.getElementById('class-fourteen-six-one').style.color = "black";
    document.getElementById('class-fourteen-six-two').style.color = "black";
    window.sessionStorage.setItem('alacrity2',10);
    window.sessionStorage.setItem('observation2',0);
    window.sessionStorage.setItem('logical2',0);
    window.sessionStorage.setItem('ability2',10);  
  }
  const select_five = () => {
    window.sessionStorage.setItem('what', '매일매일 헬스장에 가자!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-fourteen-one-one').style.color = "black";
    document.getElementById('class-fourteen-one-two').style.color = "black";
    document.getElementById('class-fourteen-two-one').style.color = "black";
    document.getElementById('class-fourteen-two-two').style.color = "black";
    document.getElementById('class-fourteen-three-one').style.color = "black";
    document.getElementById('class-fourteen-three-two').style.color = "black";
    document.getElementById('class-fourteen-four-one').style.color = "black";
    document.getElementById('class-fourteen-four-two').style.color = "black";
    document.getElementById('class-fourteen-five-one').style.color = "white";
    document.getElementById('class-fourteen-five-two').style.color = "yellow";
    document.getElementById('class-fourteen-six-one').style.color = "black";
    document.getElementById('class-fourteen-six-two').style.color = "black";
    window.sessionStorage.setItem('alacrity2',10);
    window.sessionStorage.setItem('observation2',0);
    window.sessionStorage.setItem('logical2',10);
    window.sessionStorage.setItem('ability2',0);  
  }
  const select_six = () => {
    window.sessionStorage.setItem('what', '한 학기 내 대학생활의 로드맵을 그려보자!');
    document.getElementsByClassName('rectangle-div60-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-one-fourteen-one')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-one-fourteen-one')[0].style.backgroundColor = "#147176";
    document.getElementById('class-fourteen-one-one').style.color = "black";
    document.getElementById('class-fourteen-one-two').style.color = "black";
    document.getElementById('class-fourteen-two-one').style.color = "black";
    document.getElementById('class-fourteen-two-two').style.color = "black";
    document.getElementById('class-fourteen-three-one').style.color = "black";
    document.getElementById('class-fourteen-three-two').style.color = "black";
    document.getElementById('class-fourteen-four-one').style.color = "black";
    document.getElementById('class-fourteen-four-two').style.color = "black";
    document.getElementById('class-fourteen-five-one').style.color = "black";
    document.getElementById('class-fourteen-five-two').style.color = "black";
    document.getElementById('class-fourteen-six-one').style.color = "white";
    document.getElementById('class-fourteen-six-two').style.color = "yellow";
    window.sessionStorage.setItem('alacrity2',0);
    window.sessionStorage.setItem('observation2',10);
    window.sessionStorage.setItem('logical2',10);
    window.sessionStorage.setItem('ability2',0);  
  }

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 1,
      scene_num: 16,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 1-16-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      document.getElementById('story 1-16-1').innerText = sessionStorage.getItem('scence 1-16-1');
     })
    .catch((e) => {
      console.error(e);
    });
    
    if(sessionStorage.getItem('what') != null){
      navigate('/ch1story15');
    }else{
      alert('뭘 하실지 골라주세요');
    }
  }

  return (
    <div className="ch1-10-3-one-fourteen-one">
      <img className="image-261-icon3-one-fourteen-one" alt="" src="../image-261@2x.png" />
      <div className="group-div8-one-fourteen-one">
        <div className="rectangle-div61-one-fourteen-one" onClick={select_two}>
        <div className="div24-one-fourteen-one" >
          <p className="p35-one-fourteen-one" id="class-fourteen-two-one">
            <span>내 전공에서 어떤 과목을 배울지 너무너무 궁금해!</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-two-two" >
            <b>전공책을 미리 사서 예습해보자!</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div9-one-fourteen-one">
        <div className="rectangle-div62-one-fourteen-one" onClick={select_three}>
        <div className="div25-one-fourteen-one">
          <p className="p35-one-fourteen-one" id="class-fourteen-three-one">
            <span>원활한 대학생활을 위해선, 일단 친구를 만들어야해.</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-three-two">
            <b>단과 대화방에서 잡힌 번개모임에 가야지!</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div10-one--one-fourteen-one">
        <div className="rectangle-div63-one-fourteen-one" onClick={select_four}>
        <div className="ceo-div1-one-fourteen-one">
          <p className="p35-one-fourteen-one" id="class-fourteen-four-one">
            <span> 시간을 버릴순 없어! 난 미래를 위해 살아간다.</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-four-two">
            <b>자격증 먼저 부순다. 지금부터 공부 시작!</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div11-one-fourteen-one">
        <div className="rectangle-div65-one-fourteen-one" onClick={select_six}>
        <div className="div26-one-fourteen-one">
          <p className="p35-one-fourteen-one" id="class-fourteen-six-one">
            <span>아무래도 대학생활은 첫 단추가 가장 중요하지.</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-six-two">
            <b>한 학기 내 대학생활의 로드맵을 그려보자!</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div12-one-fourteen-one">
        <div className="rectangle-div64-one-fourteen-one" onClick={select_five}>
        <div className="div27-one-fourteen-one">
          <p className="p35-one-fourteen-one" id="class-fourteen-five-one">
            <span>그래도 입학 전까지는 탄탄한 몸을 만들고 싶어.</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-five-two">
            <b>매일매일 헬스장에 가자!</b>
          </p>
          </div>
        </div>
      </div>
      <div className="group-div13-one-fourteen-one">
        <div className="rectangle-div60-one-fourteen-one" onClick={select_one}>
        <div className="div28-one-fourteen-one">
          <p className="p35-one-fourteen-one" id="class-fourteen-one-one">
            <span>음악을 듣거나 영화를 보거나! 미술관도 가볼까~?</span>
          </p>
          <p className="p36-one-fourteen-one" id="class-fourteen-one-two">
            <b>마음의 소양을 샇는 취미생활을 즐기자!</b>
          </p>
        </div>
        </div>
      </div>
      <img className="group-icon33-one-fourteen-one" alt="" src="../Group 328.png" onClick={nextstory}/>
      <div className="div29-one-fourteen-one">
          본인의 적성/관심사와 가장 가까운 선택지를 골라주세요.
      </div>
      <b className="b3-one-fourteen-one">{user_name}님은 그동안 어떤 걸 할까요?</b>
    </div>
  );
};

export default Story_ch1_14_1;
