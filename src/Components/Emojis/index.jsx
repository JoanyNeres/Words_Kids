import React, { useEffect, useState } from "react";
import wordsInMachine from "../../assets/words";
import { randomNumber } from "../../utils/randomNumber";
import Emoji from "../Emoji/Emoji";
import { Funfact } from "../Funfact";
import "./index.css";

const getRandomWord = () => {
  return wordsInMachine[randomNumber({ range: wordsInMachine.length })];
};

export function Emojis({ word, generateWord }) {
  const [emojiList, setEmojiList] = useState([]);
  const [answerUser, saveAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    saveAnswer("");
    setSubmitted(false);
    const list = [word];
    while (list.length < 6) {
      const newWord = getRandomWord();
      if (!list.includes(newWord)) {
        list.push(newWord);
      }
    }
    list.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));
    setEmojiList(list);

    return () => {
      setEmojiList([]);
    };
  }, [word]);

  const clickAnswer = (event) => {
    setSubmitted(false);
    saveAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ul className="emoji_options">
          {emojiList.map((item, index) => (
            <Emoji
              clickAnswer={clickAnswer}
              index={index}
              word={item}
              key={item.key}
              answerUser={answerUser}
            />
          ))}
        </ul>
      </div>
      <div>
        <button className="button_send" type="submit">
          SEND
        </button>
      </div>
      {submitted ? (
        <>
          <div className="answerPhrase">
            <p>{answerUser === word.value ? "Well done!" : "Try again!"}</p>
          </div>
          {answerUser === word.value ? (
            <Funfact text={word.funFact} restart={generateWord} />
          ) : null}
        </>
      ) : null}
    </form>
  );
}
