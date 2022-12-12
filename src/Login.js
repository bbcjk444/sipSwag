import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
// import "./Login.css";
import "./Login2.css";

const Login = ({ modal, openModal }) => {
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const openModal2 = () => {
    setModal2(!modal2);
  };

  const openModal3 = () => {
    setModal3(!modal3);
  };
  const openModal4 = () => {
    setModal4(!modal4);
  };
  const idRef = useRef();
  const pwRef = useRef();

  const Navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력하세요");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );
    axios
      .post("http://localhost:8008/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res.data[0].admin);
        if (res.data[0] !== undefined) {
          window.sessionStorage.setItem("admin", res.data[0].admin);
          console.log(
            "로페 관리자여부 확인 => " + sessionStorage.getItem("admin")
          );
          window.sessionStorage.setItem("id", idRef.current.value);
          alert("세션: " + window.sessionStorage.getItem("id"));
        } else {
          alert("계정 없음");
        }
        openModal(modal);
        var id = document.getElementById("username");
        var pw = document.getElementById("password");
        id.value = "";
        pw.value = "";
      })
      .catch((e) => {
        console.error(e);
      });

    axios
      .post("http://localhost:8008/graph", {
        id: idRef.current.value,
      })
      .then((res) => {
        console.log("handlgraph =>", res.data[0]);
        sessionStorage.setItem("alacrity", res.data[0].alacrity);
        sessionStorage.setItem("observation", res.data[0].observation);
        sessionStorage.setItem("logical", res.data[0].logical);
        sessionStorage.setItem("ability", res.data[0].ability);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const findID = () => {
    Navigate("/findID");
  };

  const findPW = () => {
    Navigate("/findPW");
  };

  const handleJoin = () => {
    Navigate("/join");
  };

  return (
    <div>
      <div className="wrap">
        <div className="login">
          <h2>로그인</h2>
          <div className="login_id">
            <h4>아이디</h4>
            <input
              type="text"
              className=""
              id="userid"
              placeholder=""
              ref={idRef}
            />
          </div>
          <div className="login_pw">
            <h4>비밀번호</h4>
            <input
              type="password"
              className=""
              id="pass"
              placeholder=""
              ref={pwRef}
            />
          </div>
          <div className="login_etc">
            <div className="checkbox">
              <input type="checkbox" className="Remember" /> Remember Me?
            </div>
            <div className="forgot_pw">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="button">
            <input
              className="btn2"
              type="button"
              value="로그인"
              onClick={handleLogin}
            />

            <input
              className="btn2"
              type="button"
              value="회원가입"
              onClick={openModal2}
            />
            {modal2 === true ? (
              <Modal2 modal2={modal2} openModal2={openModal2} />
            ) : null}
            <input
              className="btn btn2"
              type="button"
              value="아이디 찾기"
              onClick={openModal3}
            />
            {modal3 === true ? (
              <Modal3 modal3={modal3} openModal3={openModal3} />
            ) : null}
            <input
              className="btn btn2"
              type="button"
              value="비밀번호 찾기"
              onClick={openModal4}
            />
            {modal4 === true ? (
              <Modal4 modal4={modal4} openModal4={openModal4} />
            ) : null}
            <input
              className="clear"
              type="button"
              value="닫기"
              onClick={() => {
                openModal(modal);
              }}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="login-wrap">
    <div className="login-html">
      <input
        id="tab-1"
        type="radio"
        name="tab"
        className="sign-in"
        checked
      />
      <label className="tab">로그인</label>
      <input type="radio" className="sign-up" />
      <label className="tab"></label>
      <div className="login-form">
        <div className="sign-in-htm">
          <div className="group">
            <label className="label">아이디</label>
            <input id="user" type="text" className="input" ref={idRef} />
          </div>
          <div className="group">
            <label className="label">비밀번호</label>
            <input
              id="pass"
              type="password"
              className="input"
              data-type="password"
              ref={pwRef}
            />
          </div>
          <div className="group">
            <label>
              <span className="icon"></span>
            </label>
          </div>
          <div className="group">
            <input
              type="submit"
              className="button"
              value="로그인"
              onClick={handleLogin}
            />
            <input
              type="submit"
              className="button"
              value="회원가입"
              onClick={openModal2}
            />
            {modal2 === true ? (
              <Modal2 modal2={modal2} openModal2={openModal2} />
            ) : null}
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <input
              className="btn"
              type="button"
              value="아이디 찾기"
              onClick={findID}
            />

            <input
              className="btn"
              type="button"
              value="비밀번호 찾기"
              onClick={findPW}
            />
            <input
              className="clear"
              type="button"
              value="Clear"
              onClick={() => {
                openModal(modal);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div> */
}
