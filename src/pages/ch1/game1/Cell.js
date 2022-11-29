import React from "react";
import styled from "styled-components";

function Cell({ num, handleClick }) {
  return (
    <Container onClick={() => handleClick(num)}>
      {num !== 0 ? num : null}
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 800;
  background: white;
  caret-color: white;
`;

export default Cell;
