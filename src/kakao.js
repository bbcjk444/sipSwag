import React, { Component } from "react";
// import kakao from "./kakao.jpg";
// import Skuta from "../image-skuta.png";

class Kakao extends Component {
  componentDidMount() {
    window.Kakao.init("8f1b8e2edd5b94e672b23fa6a93ac21b");

    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
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
  }
  onClickKakao = () => {
    window.open("https://sharer.kakao.com/talk/friends/picker/link");
  };
  render() {
    return (
      <div className="Kakao">
        <button id="kakao-link-btn" onClick={this.onClickKakao}>
          공유하기
        </button>
      </div>
    );
  }
}

export default Kakao;
