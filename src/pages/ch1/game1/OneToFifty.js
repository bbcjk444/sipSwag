import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import StartButton from "./StartButton.png";
import FinishButton from "./finishBtn.png";

import "./OneToFifty.css";

let array = [];
for (let i = 1; i <= 16; i++) {
  array.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const [trys, setTrys] = useState(0);
  const [gameCount, setGameCount] = useState(1);
  const [gameFinish, setGameFinish] = useState(false);

  const handleClick = (num) => {
    setTrys(trys + 1);
    if (num === current && gameFlag) {
      if (num === 25) {
        console.log("Success");
        setGameFinish(true);
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers((numbers) => [
        ...numbers.slice(0, index),
        num < 10 ? num + 16 : 0,
        ...numbers.slice(index + 1),
      ]);
      setCurrent((current) => current + 1);
    }
  };

  const navigate = useNavigate();
  const startGame = () => {
    if (gameCount > 0) {
      setGameCount(gameCount - 1);
      setNumbers(shuffleArray(array));
      setCurrent(1);
      setGameFlag(true);
    } else {
      var test1 = sessionStorage.getItem("firstGametime").substr(0,sessionStorage.getItem("firstGametime").length-3);
      var test2 = sessionStorage.getItem("firstGametime");
      console.log("다시 test1 => " + test1);
      console.log("다시 test2 => " + test2);

      axios
      .post('http://localhost:8008/getstory', {
        scenario_num: 1,
        chapter_num: 1,
        scene_num: 13,
      })
      .then((res) => {
        console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
        if(test1 <= 15){
          window.sessionStorage.setItem('scence 1-result1-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
          window.sessionStorage.setItem('scence 1-result1-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
          document.getElementById('story 1-result1-1').innerText = sessionStorage.getItem('scence 1-result1-1');
          document.getElementById('story 1-result1-2').innerText = sessionStorage.getItem('scence 1-result1-2');
          window.sessionStorage.setItem('alacrity-game1',35);
          window.sessionStorage.setItem('observation-game1',35);
        }else if( test1 > 15 &&  test1 <= 18){
          window.sessionStorage.setItem('scence 1-result2-1', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));
          window.sessionStorage.setItem('scence 1-result2-2', JSON.stringify(res.data[3].speak_story).substring(1,JSON.stringify(res.data[3].speak_story).length-1));
          document.getElementById('story 1-result2-1').innerText = sessionStorage.getItem('scence 1-result2-1');
          document.getElementById('story 1-result2-2').innerText = sessionStorage.getItem('scence 1-result2-2');
          window.sessionStorage.setItem('alacrity-game1',25);
          window.sessionStorage.setItem('observation-game1',25);
        }else if( test1 > 18){
          window.sessionStorage.setItem('scence 1-result3-1', JSON.stringify(res.data[4].speak_story).substring(1,JSON.stringify(res.data[4].speak_story).length-1));
          window.sessionStorage.setItem('scence 1-result3-2', JSON.stringify(res.data[5].speak_story).substring(1,JSON.stringify(res.data[5].speak_story).length-1));
          document.getElementById('story 1-result3-1').innerText = sessionStorage.getItem('scence 1-result3-1');
          document.getElementById('story 1-result3-2').innerText = sessionStorage.getItem('scence 1-result3-2');
          window.sessionStorage.setItem('alacrity-game1',15);
          window.sessionStorage.setItem('observation-game1',15);
        }
       })
      .catch((e) => {
        console.error(e);
      });
      if( test1 <= 15){
        navigate('/ch1result1')
      }else if( test1 > 15 &&  test1 <= 18){
        navigate('/ch1result2')
      }else if( test1 > 18){
        navigate('/ch1result3')
      }
    }
  };

  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <div className="contain">
      <div className="ver"></div>
      <div className="hor"></div>
      <Container>
        <Board numbers={numbers} handleClick={handleClick}></Board>
        {gameFlag ? (
          <div>
            <Timer />
            <div className="gameCounts">
              <h2>시행횟수 : </h2>
              <h2>{trys}</h2>
            </div>
          </div>
        ) : (
          <div className="startButtonContainer">
            {gameFinish ? (
              <img
                src={FinishButton}
                onClick={startGame}
                className="StartButton"
              />
            ) : (
              <img
                src={StartButton}
                onClick={startGame}
                className="StartButton"
              />
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Container = styled.div`
  width: 600px;
  height: 800px;
  border: 3px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #52d2c4;
  border-radius: 20px;
`;

export default OneToFifty;
