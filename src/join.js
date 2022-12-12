import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login2.css";

const Join = ({ modal2, openModal2 }) => {
  const idRef = useRef();
  const pw1Ref = useRef();
  const pw2Ref = useRef();
  const nickRef = useRef();
  const nameRef = useRef();
  const tellRef = useRef();

  const navigate = useNavigate();

  const handlepwcheck = () => {
    var pwcheck = document.getElementById("pwcheck");
    if (pw1Ref.current.value !== "" && pw2Ref.current.value !== "") {
      if (pw1Ref.current.value === pw2Ref.current.value) {
        pwcheck.innerText = "비밀번호 확인 완료";
        pwcheck.style = "color:blue";
      } else {
        pwcheck.innerText = "비밀번호가 다릅니다";
        pwcheck.style = "color:red";
      }
    } else {
      pwcheck.innerText = "비밀번호와 확인용 비밀번호를 확인해주세요";
      pwcheck.style = "color:green";
    }
  };

  const handleidcheck = () => {
    var idcheck = document.getElementById("idcheck");
    axios
      .post("http://localhost:8008/idcheck", {
        id: idRef.current.value,
      })
      .then((res) => {
        console.log("아이디 중복 체크 =>" + res);
        if (res.data[0].cnt === 1) {
          idcheck.innerText = "아이디 중복";
          idcheck.style = "color:red";
        } else {
          idcheck.innerText = "아이디 사용가능";
          idcheck.style = "color:blue";
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handlenickcheck = () => {
    var nickcheck = document.getElementById("nickcheck");
    axios
      .post("http://localhost:8008/nickcheck", {
        nick: nickRef.current.value,
      })
      .then((res) => {
        if (res.data[0].cnt === 1) {
          nickcheck.innerText = "닉네임 중복";
          nickcheck.style = "color:red";
        } else {
          nickcheck.innerText = "닉네임 사용가능";
          nickcheck.style = "color:blue";
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handletellcheck = () => {
    var tellcheck = document.getElementById("tellcheck");
    axios
      .post("http://localhost:8008/tellcheck", {
        tell: tellRef.current.value,
      })
      .then((res) => {
        if (res.data[0].cnt === 1) {
          tellcheck.innerText = "전화번호 중복";
          tellcheck.style = "color:red";
        } else {
          tellcheck.innerText = "전화번호 사용가능";
          tellcheck.style = "color:blue";
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleJoin = () => {
    var gender = document.getElementsByName("gender");
    var genderChoice; // 여기에 선택된 radio 버튼의 값이 담기게 된다.

    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderChoice = gender[i].value;
      }
    }

    var idcheck = document.getElementById("idcheck");
    var pwcheck = document.getElementById("pwcheck");
    var nickcheck = document.getElementById("nickcheck");
    var tellcheck = document.getElementById("tellcheck");

    if (
      idcheck.innerText === "아이디 사용가능" &&
      pwcheck.innerText === "비밀번호 확인 완료" &&
      nickcheck.innerText === "닉네임 사용가능" &&
      tellcheck.innerText === "전화번호 사용가능"
    ) {
      axios
        .post("http://localhost:8008/join", {
          id: idRef.current.value,
          pw: pw1Ref.current.value,
          tell: tellRef.current.value,
          name: nameRef.current.value,
          nick: nickRef.current.value,
          gender: genderChoice,
        })
        .then((res) => {
          console.log("handleJoin =>", res);
          if (res.data.affectedRows === 1) {
            alert("회원가입이 되었습니다");
          } else {
            alert("회원가입이 되지 않았습니다.");
          }
          openModal2(modal2);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert("아이디, 비밀번호, 닉네임, 전화번호 체크를 확인해주세요");
    }
  };

  const handleLogin = () => {
    // navigate("/login");
    // openModal2(modal2);
  };

  return (
    <div>
      <div className="wrap">
        <div className="login">
          <h1>회원가입</h1>
          <div className="login_id">
            <input
              type="id"
              className="login_etc"
              id="userid"
              placeholder="아이디를 입력해주세요"
              ref={idRef}
            />
          </div>
          <div>
            <div>
              <h3 id="idcheck">아이디 중복 확인</h3>
            </div>
            <input
              className="btn"
              type="button"
              value="idcheck"
              onClick={handleidcheck}
              id="idcheckbutton"
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              className="login_etc"
              id="pass"
              placeholder="비밀번호를 입력해주세요"
              ref={pw1Ref}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              className="login_etc"
              id="pass"
              placeholder="비밀번호 확인"
              ref={pw2Ref}
              defaultValue=""
            />
          </div>
          <div>
            <div className="h3">
              <h3 id="pwcheck">비밀번호 확인</h3>
            </div>
            <input
              type="button"
              value="pwcheck"
              onClick={handlepwcheck}
              id="pwcheckbutton"
            />
          </div>
          <div className="login_id">
            <input
              type="id"
              id="userid"
              className=""
              placeholder="닉네임을 입력해주세요"
              ref={nickRef}
              defaultValue=""
            />
          </div>
          <div>
            <div className="h3">
              <h3 id="nickcheck">닉네임 중복 확인</h3>
            </div>
            <input
              type="button"
              value="nickcheck"
              onClick={handlenickcheck}
              id="nickcheckbutton"
            />
          </div>
          <div className="login_id">
            <input
              type="text"
              className=""
              placeholder="이름을 입력해주세요"
              ref={nameRef}
              defaultValue=""
            />
          </div>
          <div className="login_id">
            <input
              type="text"
              id="tell"
              name="tell"
              placeholder="전화번호를 입력해주세요('-'제외)"
              className="text_input"
              ref={tellRef}
              defaultValue=""
            />
          </div>
          <div>
            <div className="h3">
              <h3 id="tellcheck">전화번호 확인</h3>
            </div>
            <input
              className="btn"
              type="button"
              value="tellcheck"
              onClick={handletellcheck}
              id="tellcheckbutton"
            />
          </div>
          <div className="radio">
            <div>
              <input type="radio" name="gender" value="남" />
              <p>남자</p>
            </div>
            <div>
              <input type="radio" name="gender" value="여" />
              <p>여자</p>
            </div>
          </div>
          <div className="button">
            <input
              className="button , button2"
              type="button"
              value="회원가입"
              onClick={handleJoin}
            />
            <input
              className="button, button2"
              type="button"
              value="닫기"
              onClick={() => {
                openModal2(modal2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;

{
  /* <div>
  <form className="joinForm">
    <h2>회원가입</h2>
    <div className="textForm">
      <input
        type="text"
        className="id"
        ref={idRef}
        placeholder="아이디를 입력해주세요"
      />
    </div>
    <div>
      <h8 id="idcheck">아이디 중복 확인</h8>
      <input
        type="button"
        value="idcheck"
        onClick={handleidcheck}
        id="check"
      />
    </div>
    <div className="textForm">
      <input
        type="password"
        className="pw"
        ref={pw1Ref}
        placeholder="비밀번호를 입력해주세요"
      />
    </div>
    <div className="textForm">
      <input
        type="password"
        className="pw"
        ref={pw2Ref}
        placeholder="비밀번호를 입력해주세요"
      />
    </div>
    <div>
      <h8 id="pwcheck">비밀번호 확인</h8>
      <input
        type="button"
        value="pwcheck"
        onClick={handlepwcheck}
        id="pwcheckbutton"
      />
    </div>
    <div className="textForm">
      <input
        name="nickname"
        type="text"
        class="nickname"
        placeholder="닉네임을 입력해주세요"
        ref={nickRef}
      />
    </div>
    <div>
      <h8 id="nickcheck">닉네임 중복 확인</h8>
      <input
        type="button"
        value="nickcheck"
        onClick={handlenickcheck}
        id="nickcheckbutton"
      />
    </div>
    <div className="textForm">
      <input
        type="text"
        id="name"
        name="name"
        className="name"
        placeholder="이름을 입력해주세요"
        ref={nameRef}
      />
    </div>
    <div className="textForm">
      <input
        type="text"
        id="tell"
        name="tell"
        className="cellphoneNo"
        placeholder="전화번호을 입력해주세요"
        ref={tellRef}
      />
    </div>
    <div>
      <h8 id="tellcheck">전화번호 확인</h8>
      <input
        type="button"
        value="tellcheck"
        onClick={handletellcheck}
        id="tellcheckbutton"
      />
      <div className="radio" align="center">
        <td width="400">
          <input id="gender" type="radio" name="gender" value="남" />
          남자
          <input id="gender" type="radio" name="gender" value="여" />
          여자
        </td>
      </div>
    </div>
    <input
      id="btn"
      className="btn"
      type="button"
      value="회원가입"
      onClick={handleJoin}
    />
    <input
      id="btn"
      className="btn"
      type="button"
      value="clear"
      onClick={openModal2}
    />
  </form>
</div> */
}
