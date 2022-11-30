import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Modal2 from "./Modal2";

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
          console.log("로페 관리자여부 확인 => " + sessionStorage.getItem("admin"));
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
    <div className="Login" align="center" border-radius="22px">
      <h1>Login</h1>
      <form>
        <div className="text-area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder=" ID"
            className="text_input"
            ref={idRef}
          />
          <div className="text-area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" PASSWORD"
              className="text_input"
              ref={pwRef}
            />
          </div>
          <br />
          <input
            type="button"
            value="로그인"
            className="btn"
            onClick={handleLogin}
          />
        </div>
        <input
          type="button"
          value="▷계정이 없으신가요?"
          onClick={openModal2}
          className="submit"
        />
        {modal2 === true ? (
          <Modal2 modal2={modal2} openModal2={openModal2} />
        ) : null}
        <br />
        <br />
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
      </form>
    </div>
  );
};

export default Login;
