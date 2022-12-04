import "./Story_ch2_24.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Story_ch2_24= () => {

  var user_name = sessionStorage.getItem('user_name');

  console.log('유저 이름 확인 => ' + sessionStorage.getItem('user_name'));

  const navigate = useNavigate();

  const select_one = () => {
    window.sessionStorage.setItem('department2', '너만오면합주');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-two-one-one').style.color = "white";
    document.getElementById('class-two-one-two').style.color = "yellow";
    document.getElementById('class-two-two-one').style.color = "black";
    document.getElementById('class-two-two-two').style.color = "black";
    document.getElementById('class-two-three-one').style.color = "black";
    document.getElementById('class-two-three-two').style.color = "black";
    document.getElementById('class-two-four-one').style.color = "black";
    document.getElementById('class-two-four-two').style.color = "black";
    document.getElementById('class-two-five-one').style.color = "black";
    document.getElementById('class-two-five-two').style.color = "black";
    document.getElementById('class-two-six-one').style.color = "black";
    document.getElementById('class-two-six-two').style.color = "black";
  }
  const select_two = () => {
    window.sessionStorage.setItem('department2', '봉사일만시간');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-two-one-one').style.color = "black";
    document.getElementById('class-two-one-two').style.color = "black";
    document.getElementById('class-two-two-one').style.color = "white";
    document.getElementById('class-two-two-two').style.color = "yellow";
    document.getElementById('class-two-three-one').style.color = "black";
    document.getElementById('class-two-three-two').style.color = "black";
    document.getElementById('class-two-four-one').style.color = "black";
    document.getElementById('class-two-four-two').style.color = "black";
    document.getElementById('class-two-five-one').style.color = "black";
    document.getElementById('class-two-five-two').style.color = "black";
    document.getElementById('class-two-six-one').style.color = "black";
    document.getElementById('class-two-six-two').style.color = "black";
  }
  const select_three = () => {
    window.sessionStorage.setItem('department2', '에디슈타인');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-two-one-one').style.color = "black";
    document.getElementById('class-two-one-two').style.color = "black";
    document.getElementById('class-two-two-one').style.color = "black";
    document.getElementById('class-two-two-two').style.color = "black";
    document.getElementById('class-two-three-one').style.color = "white";
    document.getElementById('class-two-three-two').style.color = "yellow";
    document.getElementById('class-two-four-one').style.color = "black";
    document.getElementById('class-two-four-two').style.color = "black";
    document.getElementById('class-two-five-one').style.color = "black";
    document.getElementById('class-two-five-two').style.color = "black";
    document.getElementById('class-two-six-one').style.color = "black";
    document.getElementById('class-two-six-two').style.color = "black";
  }
  const select_four = () => {
    window.sessionStorage.setItem('department2', '굉장한창업');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-two-one-one').style.color = "black";
    document.getElementById('class-two-one-two').style.color = "black";
    document.getElementById('class-two-two-one').style.color = "black";
    document.getElementById('class-two-two-two').style.color = "black";
    document.getElementById('class-two-three-one').style.color = "black";
    document.getElementById('class-two-three-two').style.color = "black";
    document.getElementById('class-two-four-one').style.color = "white";
    document.getElementById('class-two-four-two').style.color = "yellow";
    document.getElementById('class-two-five-one').style.color = "black";
    document.getElementById('class-two-five-two').style.color = "black";
    document.getElementById('class-two-six-one').style.color = "black";
    document.getElementById('class-two-six-two').style.color = "black";
  }
  const select_five = () => {
    window.sessionStorage.setItem('department2', '목표는3대1000');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementById('class-two-one-one').style.color = "black";
    document.getElementById('class-two-one-two').style.color = "black";
    document.getElementById('class-two-two-one').style.color = "black";
    document.getElementById('class-two-two-two').style.color = "black";
    document.getElementById('class-two-three-one').style.color = "black";
    document.getElementById('class-two-three-two').style.color = "black";
    document.getElementById('class-two-four-one').style.color = "black";
    document.getElementById('class-two-four-two').style.color = "black";
    document.getElementById('class-two-five-one').style.color = "white";
    document.getElementById('class-two-five-two').style.color = "yellow";
    document.getElementById('class-two-six-one').style.color = "black";
    document.getElementById('class-two-six-two').style.color = "black";
  }
  const select_six = () => {
    window.sessionStorage.setItem('department2', '취업다부수는');
    document.getElementsByClassName('rectangle-div60-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div61-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div62-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div63-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div64-two-twentyfour')[0].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName('rectangle-div65-two-twentyfour')[0].style.backgroundColor = "#147176";
    document.getElementById('class-two-one-one').style.color = "black";
    document.getElementById('class-two-one-two').style.color = "black";
    document.getElementById('class-two-two-one').style.color = "black";
    document.getElementById('class-two-two-two').style.color = "black";
    document.getElementById('class-two-three-one').style.color = "black";
    document.getElementById('class-two-three-two').style.color = "black";
    document.getElementById('class-two-four-one').style.color = "black";
    document.getElementById('class-two-four-two').style.color = "black";
    document.getElementById('class-two-five-one').style.color = "black";
    document.getElementById('class-two-five-two').style.color = "black";
    document.getElementById('class-two-six-one').style.color = "white";
    document.getElementById('class-two-six-two').style.color = "yellow";
  }

  const nextstory = () => {
    axios
    .post('http://localhost:8008/getstory', {
      scenario_num: 1,
      chapter_num: 2,
      scene_num: 25,
    })
    .then((res) => {
      console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
      window.sessionStorage.setItem('scence 2-25-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-3', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-4', JSON.stringify(res.data[3].speak_story).substring(1,JSON.stringify(res.data[3].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-5', JSON.stringify(res.data[4].speak_story).substring(1,JSON.stringify(res.data[4].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-6', JSON.stringify(res.data[5].speak_story).substring(1,JSON.stringify(res.data[5].speak_story).length-1));
      window.sessionStorage.setItem('scence 2-25-7', JSON.stringify(res.data[6].speak_story).substring(1,JSON.stringify(res.data[6].speak_story).length-1));
      if(sessionStorage.getItem('department2') === '너만오면합주'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-1');
      }else if(sessionStorage.getItem('department2') === '봉사일만시간'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-2');
      }else if(sessionStorage.getItem('department2') === '에디슈타인'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-3');
      }else if(sessionStorage.getItem('deprtment2') === '굉장한창업'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-4');
      }else if(sessionStorage.getItem('department2') === '목표는3대1000'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-5');
      }else if(sessionStorage.getItem('department2') === '취업다부수는'){
        document.getElementById('story 2-25-1').innerText = sessionStorage.getItem('scence 2-25-6');
      }
      document.getElementById('story 2-25-2').innerText = sessionStorage.getItem('scence 2-25-7');
     })
    .catch((e) => {
      console.error(e);
    });
    navigate('/ch2story25');
  }

  return (
    <div className="ch1-10-3-two-twentyfour">
      <img className="image-261-icon3-two-twentyfour" alt="" src="../image-261@2x.png" />
      <div className="group-div8-two-twentyfour">
        <div className="rectangle-div61-two-twentyfour" onClick={select_two}>
        <div className="div24-two-twentyfour" >
          <p className="p35-two-twentyfour" id="class-two-two-one">
            <span>우리는 세상에 없던 걸 만들어!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-two-two" >
            <b>봉사일만시간 동아리</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div9-two-twentyfour">
        <div className="rectangle-div62-two-twentyfour" onClick={select_three}>
        <div className="div25-two-twentyfour">
          <p className="p35-two-twentyfour" id="class-two-three-one">
            <span>배풀줄 아는 당신은 멋져요!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-three-two">
            <b>에디슈타인 동아리</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div10-two-twentyfour">
        <div className="rectangle-div63-two-twentyfour" onClick={select_four}>
        <div className="ceo-div1-two-twentyfour">
          <p className="p35-two-twentyfour" id="class-two-four-one">
            <span>CEO를 꿈꾸는 당신 이리컴!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-four-two">
            <b>굉장한창업 동아리</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div11-two-twentyfour">
        <div className="rectangle-div65-two-twentyfour" onClick={select_six}>
        <div className="div26-two-twentyfour">
          <p className="p35-two-twentyfour" id="class-two-six-one">
            <span>성공적인 취업을 위해!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-six-two">
            <b>취업다부수는 동아리</b>
          </p>
        </div>
        </div>
      </div>
      <div className="group-div12-two-twentyfour">
        <div className="rectangle-div64-two-twentyfour" onClick={select_five}>
        <div className="div27-two-twentyfour">
          <p className="p35-two-twentyfour" id="class-two-five-one">
            <span>몸이 튼튼해야 마음이 튼튼해!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-five-two">
            <b>목표는3대1000 동아리</b>
          </p>
          </div>
        </div>
      </div>
      <div className="group-div13-two-twentyfour">
        <div className="rectangle-div60-two-twentyfour" onClick={select_one}>
        <div className="div28-two-twentyfour">
          <p className="p35-two-twentyfour" id="class-two-one-one">
            <span>알코올 대신 음악에 취하는 우리!</span>
          </p>
          <p className="p36-two-twentyfour" id="class-two-one-two">
            <b>너만오면합주 동아리</b>
          </p>
        </div>
        </div>
      </div>
      <img className="group-icon33-two-twentyfour" alt="" src="../Group 328.png" onClick={nextstory}/>
      <img className="group-icon34-two-twentyfour" alt="" src="../group8.svg" />
      <div className="div29-two-twentyfour">
        본인의 적성/관심사와 가장 가까운 학과를 선택해주세요.
      </div>
      <img className="group-icon35-two-twentyfour" alt="" src="../Group 357.png" />
      <b className="b3-two-twentyfour">이상형 마쿠의 동아리는 무엇인가요?</b>
    </div>
  );
};

export default Story_ch2_24;
