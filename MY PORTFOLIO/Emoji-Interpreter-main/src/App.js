import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥺": "Pleading Face",
  "🧐": "Face With Monocle",
  "😦": "Frowning Face With Open Mouth",
  "😨": "Fearful Face",
  "😢": "Crying Face",
  "😣": "Persevering Face",
  "😯": "Surprised Face",
  "😭": "Loudly Crying Face",
  "😫": "Tired Face",
  "👿": "Devil Face"
};

const emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  function emojiInterpreter(event) {
    var emojiMeaning = emojiDictionary[event.target.value];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We Don't Have This Emoji In Our Database";
    } else {
      setEmojiMeaning(emojiMeaning);
    }
  }
  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-content">
          <h1 className="app-title">Emoji Interpreter</h1>
          <input
            placeholder="Enter Emoji Here......."
            onChange={emojiInterpreter}
          />
          {emojiKeys.map((emoji) => {
            return (
              <span
                style={{ fontSize: "2rem", padding: "0.5rem" }}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
          <div style={{ padding: "1rem" }}>
            Meaning of this Emoji is{" "}
            <span style={{ textDecoration: "underline" }}>{emojiMeaning}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
