import React from "react";
import { useState, useRef } from "react";
import Draggable from "react-draggable";
import "./DragCd.css";
import first from "./carimages/car1.png";
import second from "./carimages/car2.png";
import thrid from "./carimages/car3.png";
import fourth from "./carimages/car4.png";
import fifth from "./carimages/car5.png";
import sixth from "./carimages/car6.png";
import seventh from "./carimages/car7.png";
import eigthth from "./carimages/car8.png";
import nineth from "./carimages/car9.png";
import tenth from "./carimages/car10.png";
import eleventh from "./carimages/car11.png";
import twelvth from "./carimages/car12.png";
import title from "./carimages/Frame.png";
import answer from "./carimages/answer.png";

const DragCo = () => {
  const nodeRef = useRef(null);

  const [seeAnswer, setSeeAnswer] = useState(false);

  const [Opacity, setOpacity] = useState(false);
  const [Opacity2, setOpacity2] = useState(false);

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  const handleStart2 = () => {
    setOpacity2(true);
  };
  const handleEnd2 = () => {
    setOpacity2(false);
  };

  const goAnswer = () => {
    setSeeAnswer(!seeAnswer);
  };
  return (
    <>
      <div className="carContainers">
        <div className="Boxs">
          <img src={title} />
          <p>
            지금 지나가는 자동차들의 색상과 순서가 아까와 같다.
            <br /> 자동차를 순서대로 터치하여 정확하게 알아맞춰보자.
          </p>
          <div>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={first}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={second}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={thrid}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
          </div>
          <div>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={fourth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={fifth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={sixth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
          </div>
          <div>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={seventh}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={eigthth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={nineth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
          </div>
          <div>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={tenth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={eleventh}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
            <Draggable
              nodeRef={nodeRef}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img
                src={twelvth}
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" }}
              />
            </Draggable>
          </div>
        </div>
        <div className="answers">
          <h4>순서대로 나열하세요!</h4>
          <div className="orders">
            <p>first</p>
            <p>second</p>
            <p>third</p>
            <p>fourth</p>
          </div>
          <button className="CargameNextBtn">NEXT</button>
        </div>
      </div>
    </>
  );
};

export default DragCo;
