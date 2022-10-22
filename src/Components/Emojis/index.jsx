import "./index.css"
import React, { useState } from 'react';

export function Emojis(props){


    let [answerUser, checkAnswer] = useState("")
    const [textForAnswer, setText] = useState("")

    checkAnswer = (event) => {
        event.preventDefault()
        setText((answerUser === props.emojiMachine)
            ? "Well done!"
            : "Try again!")
    }


    return (
        <>
        <>
        {answerUser === "" &&
        <div>
            <ul className="emoji_options">
                <li>
                    <input type="radio" name="emoji" id="emoji-1"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-1">
                        <img src={props.emojisDisplay[0]}
                            alt="first emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-2"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-2">
                        <img src={props.emojisDisplay[1]}
                            alt="second emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-3"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-3">
                        <img src={props.emojisDisplay[2]}
                            alt="third emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-4"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-4">
                        <img src={props.emojisDisplay[3]}
                            alt="fourth emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-5"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-5">
                        <img src={props.emojisDisplay[4]}
                            alt="fifth emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-6"
                    value={answerUser} onClick={checkAnswer} />
                    <label for="emoji-6">
                        <img src={props.emojisDisplay[5]}
                            alt="sixth emoji"
                        />
                    </label>
                </li>
            </ul>
            <div className="answerPhrase">
                <p>{textForAnswer}</p>
            </div>
        </div>
        }
        </>
        {textForAnswer === "Well done!" &&
            <div className="button_restart">
            <button>Restart</button>
            </div>
        }
        </>
    )
}