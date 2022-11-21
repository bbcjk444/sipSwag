import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "./images/로고.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';


const Homepage = () => {

  const navigate = useNavigate();

  const gojoin = () => {
    navigate('/join');
  }

  const gologin = () => {
    navigate('/login');
  }

  const gologout = () => {
    alert('세션 제거전 => ' + sessionStorage.getItem('id') );
    sessionStorage.removeItem('id');
    alert('세션 제거후 => ' + sessionStorage.getItem('id') );
    navigate('/');
  }
  
  if(sessionStorage.getItem('id') == null){
    return (
      <div className="containers">
        <Container>
          <div className="mainheader">
            <img className="mainLogo" src={mainLogo} />
            <div className="mainHeaderButtons">
              <button onClick={gojoin}>회원가입</button>
              <button onClick={gologin}>로그인</button>
            </div>
          </div>
          <div className="MainScreen">
            <div>안녕하세요</div>
          </div>
          <div className="Homepage-Nav">
            <Link to="/">홈페이지</Link>
            <Link to="/test">테스트</Link>
            <Link to="/my">마이페이지</Link>
          </div>
        </Container>
      </div>
    );
  }else{
    return (
      <div className="containers">
        <Container>
          <div className="mainheader">
            <img className="mainLogo" src={mainLogo} />
            <div className="mainHeaderButtons">
              <button onClick={gologout}>로그아웃</button>
            </div>
          </div>
          <div className="MainScreen">
            <div>안녕하세요</div>
          </div>
          <div className="Homepage-Nav">
            <Link to="/">홈페이지</Link>
            <Link to="/test">테스트</Link>
            <Link to="/my">마이페이지</Link>
          </div>
        </Container>
      </div>
    );
  }
};

export default Homepage;
