import "./index.css"
import React, { useState } from 'react';
import { Emojis } from "../Emojis";

export function Machine(props){

    const [word, setWord] = useState("")

    const generateWord = (event) => {
        event.preventDefault()
        setWord(props.wordMachine)
    }

    function playText(word){
        const voices = window.speechSynthesis.getVoices()
        let utterance = new SpeechSynthesisUtterance(word)
        utterance.voice = voices[5]
        utterance.lang = voices[5].lang
        speechSynthesis.speak(utterance)
    }

    speechSynthesis.addEventListener('onvoiceschanged', playText)

    const playAudio = () => {
        playText(word)
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
                    <p><strong>{word}</strong></p>
                </div>
                
                {word !== "" &&
                    <>
                    <button id="audio" className="button_sound" onClick={playAudio}></button>
                    <div className="question">
                        <p>Click on the corresponding image:</p>
                    </div> 
                    <Emojis
                        wordMachine = {props.wordMachine}
                        emojiMachine = {props.emojiMachine}
                        emojisDisplay = {props.emojisDisplay}
                        indexGenerated = {props.indexGenerated}
                    />
                    </>
                }
            </div>

        </div>
    )
}