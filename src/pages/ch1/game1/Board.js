import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import Title from "./수강신청제목.png";
import TitleBlood from "./Vector.png";

function Board({ numbers, handleClick }) {
  return (
    <div>
      <div className="BoardTitle">
        <img src={TitleBlood} className="blood" />
        <img src={Title} className="firstGameTitle" />
      </div>
      <Container>
        {numbers.map((num, index) => (
          <Cell num={num} key={index} handleClick={handleClick}></Cell>
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid lightgray;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  cursor: pointer;
  margin-top: -150px
`;

export default Board;
