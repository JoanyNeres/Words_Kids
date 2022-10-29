import "./index.css";

export function Funfact({ text, restart }) {
  return (
    <div className="funfact_content">
      <div>
        <img
          className="arrow_gif"
          alt="Arrow animation"
          src="https://cdn.discordapp.com/attachments/1016745958727491615/1033755936558420049/arrow_words_kids_gif.gif"
        />
      </div>
      <div>
        <p className="funfact_phrase">{text}</p>
      </div>
      <div>
        <button onClick={restart} className="button_restart">
          RESTART
        </button>
      </div>
    </div>
  );
}
