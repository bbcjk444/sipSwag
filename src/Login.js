import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const Navigate = useNavigate();

  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => {
    setModalOpen2(true);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const handleLogin = (handleClose) => {
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
        console.log("handleLogin =>", res.data[0].user_name);
        if (res.data[0] !== undefined) {
          window.sessionStorage.setItem("name", res.data[0].user_name);
          console.log("로페 이름 확인 => " + sessionStorage.getItem("name"));
          window.sessionStorage.setItem("id", idRef.current.value);
          alert("세션: " + window.sessionStorage.getItem("id"));
          // Navigate(handleClose());
        } else {
          alert("계정 없음");
          Navigate("/login");
        }
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
