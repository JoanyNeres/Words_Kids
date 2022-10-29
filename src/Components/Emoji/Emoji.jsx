import React from "react";
import numeration from "../../utils/numeration";

const Emoji = ({ word, index, clickAnswer, answerUser }) => {
  return (
    <li key={word.key}>
      <input
        type="radio"
        name="emoji"
        id={`emoji-${index}`}
        value={word.key}
        checked={answerUser === word.value}
        onChange={clickAnswer}
      />
      <label htmlFor={`emoji-${index}`}>
        <img src={word.img} alt={`${numeration[index]} emoji`} />
      </label>
    </li>
  );
};

export default Emoji;
