import React, { useState } from "react";
import wordsInMachine from "../../assets/words";
import { randomNumber } from "../../utils/randomNumber";
import { Emojis } from "../Emojis";
import "./index.css";

function playText(word) {
  const voices = window.speechSynthesis.getVoices();
  let utterance = new SpeechSynthesisUtterance(word);
  const enVoices = voices.filter((el) => el.lang.includes("en"));
  utterance.voice = enVoices[0];
  utterance.lang = enVoices[0].lang;
  speechSynthesis.speak(utterance);
}

export function Machine() {
  const [word, setWord] = useState(null);

  speechSynthesis.addEventListener("onvoiceschanged", playText);

  const generateWord = () => {
    const index = randomNumber({ range: wordsInMachine.length });
    if (index >= 0 && index < wordsInMachine.length) {
      setWord(wordsInMachine[index]);
    } else {
      setWord(null);
    }
  };

  const playAudio = () => {
    if (word?.value) {
      playText(word.value);
    }
  };

  return (
    <div>
      <div className="machine">
        <img
          className="machine_gif"
          src="https://cdn.discordapp.com/attachments/1016745958727491615/1030525413170106529/words_machine_gif.gif"
          alt="Words Machine Animation"
        />
        <div className="ejector_machine">
          <button className="button_pressme" onClick={generateWord}>
            <span>{!word ? "PRESS ME" : "RESTART"}</span>
          </button>
        </div>
        <div className="word">
          <p>
            <strong>{word?.value}</strong>
          </p>
        </div>

        {word ? (
          <>
            <button
              id="audio"
              className="button_sound"
              onClick={playAudio}
            ></button>
            <div className="question">
              <p>Click on the corresponding image:</p>
            </div>
            <Emojis word={word} generateWord={generateWord} />
          </>
        ) : null}
      </div>
    </div>
  );
}
