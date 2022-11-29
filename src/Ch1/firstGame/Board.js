import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({ numbers, handleClick }) {
  return (
    <div>
      <h3 className="firstGameTitle">수강신청 꼭 성공하자!</h3>
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
  border: 2px solid blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  cursor: pointer;
`;

export default Board;
