import "./index.css"
import React, { useState } from 'react';
import { Emojis } from "../Emojis";
import $ from "jquery"

export function Machine(props){

    const [word, setWord] = useState("")

    const generateWord = (event) => {
        event.preventDefault()
        setWord(props.wordMachine)
    }

    const [urlSound, setUrl] = useState("")
 

    const playAudio = (event) => {
        event.preventDefault()
        setUrl("https://translate.google.com/translate_tts?tl=en&q=" + word + "&client=tw-ob")
        $("audio").get(0).load()
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
                    <audio hidden src={urlSound} ></audio>


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