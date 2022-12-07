import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Modal2 from "./Modal2";
import "./Login.css";

const Login = ({ modal, openModal }) => {
  const [modal2, setModal2] = useState(false);

  const openModal2 = () => {
    setModal2(!modal2);
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
      <div className="login-wrap">
        <div className="login-html">
          <input
            // id="tab-1"
            type="radio"
            // name="tab"
            className="sign-in"
            checked
          />
          <label class="tab">로그인</label>
          <input type="radio" className="sign-up" />
          <label class="tab"></label>
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
                <label for="check">
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
      </div>
    </div>
  );
};

export default Login;
