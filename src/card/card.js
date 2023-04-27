import React, { useState } from 'react';
import classnames  from "classnames";
import "./card.css";
import k from "../images/k.jpg";

const Card = ({ card, index, isInactive, isFlipped, isDisabled, onClick, isCorrect }) => {
  
  let esta = false;
  console.log(isCorrect)
  if(card.type in isCorrect){
    esta = true;
  }
  console.log(esta);

  const handleClick = () => {
    !isFlipped && !isDisabled  && !esta && onClick(index);
    console.log(card);
  };
  
  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
        "esta": esta
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={k} alt="k" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt={card.type} />
      </div>
    </div>
  );
};
  
export default Card;
  