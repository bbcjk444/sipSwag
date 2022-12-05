import { useState } from "react";
import Card from "./Card";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import titleGame from "./Frame.png";
import gameBtnGo from "./Group 328.png";

function Cards() {
  const navigate = useNavigate();

  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/1.png", stat: "" },
      { id: 1, img: "/img/1.png", stat: "" },
      { id: 2, img: "/img/2.png", stat: "" },
      { id: 2, img: "/img/2.png", stat: "" },
      { id: 3, img: "/img/3.png", stat: "" },
      { id: 3, img: "/img/3.png", stat: "" },
      { id: 4, img: "/img/4.png", stat: "" },
      { id: 4, img: "/img/4.png", stat: "" },
      { id: 5, img: "/img/5.png", stat: "" },
      { id: 5, img: "/img/5.png", stat: "" },
      { id: 6, img: "/img/6.png", stat: "" },
      { id: 6, img: "/img/6.png", stat: "" },
      { id: 7, img: "/img/7.png", stat: "" },
      { id: 7, img: "/img/7.png", stat: "" },
      { id: 8, img: "/img/8.png", stat: "" },
      { id: 8, img: "/img/8.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const [clickCount, setClickCount] = useState(0);

  const [total, setTotal] = useState(0);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setTotal(total + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    setClickCount(clickCount + 1);
    console.log(total);
  }

  function nextPage() {
    if (total > 7) {
      navigate("/test");
      sessionStorage.setItem("secondGametimeclick", clickCount);
    } else {
      alert("성공해주세요");
    }
  }
  return (
    <div className="bbody">
      <div className="mainContainer">
        <img src={titleGame} className="title" />
        <div className="container">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
        </div>
        <h3 className="gameTitle">클릭 횟수 : {clickCount}</h3>
        <img src={gameBtnGo} className="nextBtn" onClick={nextPage} />
      </div>
    </div>
  );
}

export default Cards;
