import "./index.css"
import React, { useState } from 'react';
import { Emojis } from "../Emojis";

export function Machine(props){

    const [word, setWord] = useState("")

    const generateWord = (event) => {
        event.preventDefault()
        setWord(props.wordMachine)
    }
    

    return(
        <div>
            <div className="machine">
                <img className="machine_gif" src="https://cdn.discordapp.com/attachments/1016745958727491615/1030525413170106529/words_machine_gif.gif"
                alt="Words Machine Animation"/>
                <div className="ejector_machine">
                    <button className="button_pressme" onClick={generateWord}>
                        PRESS ME
                    </button>
                </div>
                <div className="word">
                    <p>{word}</p>
                </div>
                
                {word !== "" ?
                    <>
                    <div className="button_sound">
                    <buttom><img src="https://www.svgrepo.com/show/390429/audio-music-on-song-sound-speaker.svg"
                    alt="Listen to the word" /></buttom>
                    </div>
                    <div className="question">
                        <p>Click on the corresponding image:</p>
                    </div> 
                    <Emojis
                    wordMachine = {props.wordMachine}
                    emojiMachine = {props.emojiMachine}
                    emojisDisplay = {props.emojisDisplay}
                    />
                    </> : null
                }
            </div>

        </div>
    )
}