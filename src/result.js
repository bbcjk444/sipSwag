import "./result.css";
import Haxagon from "./hexagon";
import styled from "styled-components";
import React, { useEffect } from "react";
// import Kakao from "./kakao";
import Slides from "./Slides";

function result() {
  const shareKakao = () => {
    try {
      if (window.Kakao) {
        window.Kakao.init("8f1b8e2edd5b94e672b23fa6a93ac21b");
      }
    } catch (e) {}
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "사려깊은 산타마쿠",
        description: "“내 사람들이 모두 행복했으면 좋겠어!”",
        imageUrl: "https://i.ibb.co/Lz0zWC1/image-skuta.png",
        link: {
          mobileWebUrl: "http://localhost:3000/result",
          webUrl: "http://localhost:3000/result",
        },
      },

      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "http://localhost:3000/result",
            webUrl: "http://localhost:3000/result",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "http://localhost:3000/result",
            webUrl: "http://localhost:3000/result",
          },
        },
      ],
    });
  };
  return (
    <div className="div">
      <div className="group-div">
        <img className="icon" alt="" src="../17-1.png" />
      </div>
      <div className="rectangle-div" />
      <img className="image-245-icon" alt="" src="../image-skuta.png" />
      <div className="div1">김마쿠님의 결과는!</div>
      <div className="div2">“내 사람들이 모두 행복했으면 좋겠어!”</div>
      <div className="div3">
        <p className="p">김마쿠님은 주변 사람들에게 선물같은 존재에요.</p>
        <p className="p">관찰력이 뛰어나 사소한 것도 잘 알아차리는 당신!</p>
        <p className="p2">모든 사람들이 당신을 환영한답니다😊</p>
      </div>
      <div className="div4">관찰력이 뛰어난, 사려깊은 산타마쿠</div>
      <div className="div5">
        <p className="p">
          <span>사려깊은 산타마쿠 김마쿠님에게는</span>
        </p>
        <p className="p4">
          <span>이 동아리가 어울려요!</span>
        </p>
      </div>
      <div className="div6">
        <p className="p">
          <span>김마쿠님의 결과를</span>
        </p>
        <p className="p4">
          <span>자세하게 나타내보았어요.</span>
        </p>
      </div>
      <Slides />
      <div className="rectangle-div5" />
      <div className="div17">
        <p className="p">
          사람들을 좋아하고 친절하며, 배려와 이해심이 많습니다.
        </p>

        <p className="p2">
          봉사 동아리 등 여러 사람과 어울리는 동아리에 적합한 유형입니다.
        </p>
      </div>
      <div className="div18">
        <p className="p">
          창의적이고, 상상력이 풍부하며 감성적이고 자유분방합니다.
        </p>
        <p className="p2">
          밴드 동아리, 미술 동아리 등 문예 동아리에 적합한 유형입니다.
        </p>
      </div>
      <div className="social-div">
        <p className="p">
          <span>김마쿠님의 주 성향</span>
        </p>
        <p className="social-p">
          <span>사회형(Social)</span>
        </p>
      </div>
      <div className="div20">79.9</div>
      <div className="rectangle-div6" />
      <div className="rectangle-div7" />
      <div className="artistic-div">
        <p className="p">
          <span>김마쿠님의 부 성향</span>
        </p>
        <p className="artistic-p">
          <span>예술형(Artistic)</span>
        </p>
      </div>
      <div className="rectangle-div8" />
      <div className="rectangle-div9" />
      <img className="polygon-icon" alt="" src="../polygon-19.svg" />
      <div className="group-div2">
        <div className="div24">평균</div>
        <img className="polygon-icon1" alt="" src="../polygon-21.svg" />
      </div>
      <div className="group-div3">
        <div className="div24">평균</div>
        <img className="polygon-icon1" alt="" src="../polygon-21.svg" />
      </div>
      <div className="group-div4">
        <div className="div26">63.2</div>
        <img className="polygon-icon3" alt="" src="../polygon-19.svg" />
      </div>
      <div className="line-div" />
      <img className="line-icon" alt="" src="../line-122.svg" />
      <div className="line-div1" />
      <div className="div27">처음부터 다시 하기</div>
      <div className="rectangle-div10" />
      <div className="rectangle-div11" />
      <div className="div28" onClick={shareKakao}>
        친구에게 공유하기
        {/* <Kakao /> */}
      </div>
      <div className="div29">동아리하러 가기</div>

      <div className="div15">
        <Haxagon />
      </div>
    </div>
  );
}

export default result;
