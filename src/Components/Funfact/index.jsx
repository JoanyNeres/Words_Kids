import "./index.css"

export function Funfact(props){

    const funFactsSentences = [
        "The average apple has 10 seeds.",
        "A cluster of bananas is called a \"hand\".",
        "Grapes are botanically classed as berries.",
        "Strawberries are the only fruit that wear their seeds on the outside.",
        "A watermelon is approximately 92% water.",
        "Dogs can smell thousands of times better than humans.",
        "Cats can jump up to six times their length.",
        "Adult monkeys can live between 10 and 50 years.",
        "Lions usually live in groups of 10 or 15 animals called prides.",
        "Pigs have an excellent sense of direction.",
        "Fish have fins that help them to swim.",
        "Giant pandas are good swimmers and excellent tree climbers.",
        "A bird's eye takes up about 50 percent of its head.",
        "Ducks can sleep with one eye open to watch for predators.",
        "Giraffes are the tallest mammals on Earth.",
        "A rabbit's teeth never stop growing.",
        "Different parts of a tree grow at different times throughout the year.",
        "Some mushrooms glow in the dark.",
        "The Sun's light reaches the Earth in eight minutes.",
        "A double rainbow appears when light is reflected twice in a raindrop.",
        "The smaller stars might survive for hundreds of billions of years."
    ]

    function findFunFact(){

        let funFact = funFactsSentences[props.indexGenerated]
        return <p>{funFact}</p>
    }

    const refreshPage = () => { 
        window.location.reload(); 
    }

    return(

        <div className="funfact_content">
            <div>
                <img className="arrow_gif" alt="Arrow animation"
                src="https://cdn.discordapp.com/attachments/1016745958727491615/1033755936558420049/arrow_words_kids_gif.gif" />
            </div>
            <div>
                <p className="funfact_phrase">{findFunFact()}</p>
            </div>
            <div>
                <button onClick={refreshPage}
                className="button_restart">
                RESTART
                </button>
            </div>

        </div>
    )
}