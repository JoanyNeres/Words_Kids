import "./index.css"
import React, { useState } from 'react';
import { Funfact } from "../Funfact";

export function Emojis(props){

    const [answerUser, saveAnswer] = useState("")
    const [textForAnswer, setText] = useState("")

    const checkAnswer = (event) => {
        event.preventDefault()
        setText((answerUser === props.emojiMachine)
            ? "Well done!"
            : "Try again!")
    }


    return (
        <>
        <div>
            <ul className="emoji_options">
                <li>
                    <input type="radio" name="emoji" id="emoji-1"
                    value={props.emojisDisplay[0]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-1">
                        <img src={props.emojisDisplay[0]}
                            alt="first emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-2"
                    value={props.emojisDisplay[1]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-2">
                        <img src={props.emojisDisplay[1]}
                            alt="second emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-3"
                    value={props.emojisDisplay[2]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-3">
                        <img src={props.emojisDisplay[2]}
                            alt="third emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-4"
                    value={props.emojisDisplay[3]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-4">
                        <img src={props.emojisDisplay[3]}
                            alt="fourth emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-5"
                    value={props.emojisDisplay[4]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-5">
                        <img src={props.emojisDisplay[4]}
                            alt="fifth emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-6"
                    value={props.emojisDisplay[5]} onClick={(event) => saveAnswer(event.target.value)} />
                    <label for="emoji-6">
                        <img src={props.emojisDisplay[5]}
                            alt="sixth emoji"
                        />
                    </label>
                </li>
            </ul>
        </div>
            <div>
                <button onClick={checkAnswer}
                className="button_send" type="submit">
                SEND
                </button>
            </div>
            <div className="answerPhrase">
                <p>{textForAnswer}</p>
            </div>
            { textForAnswer === "Well done!" &&
                <Funfact
                    indexGenerated = {props.indexGenerated}
                />
            }
        </>
    )
}