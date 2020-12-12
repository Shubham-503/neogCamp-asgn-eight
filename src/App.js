import React, { useState } from "react";
import "./style.css";

const emojiDb = {
  "😁": " Grinning Face",
  "😘": "Kisssing Face",
  "😒": "Not Amused Face",
  "😊": "Smiling Face",
  "😂": "Face with Tears of Joy",
  "✌": "Victory",
  "🤞": "Finger crossed",
  "👀": "Eyes",
};
var emojisWeKnow = Object.keys(emojiDb);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function handleEmojiInput(event) {
    const emoji = event.target.value;
    const meaning = emojiDb[emoji];
    if (meaning === undefined) {
      return "Not in our Db";
    }
    setMeaning(meaning);
    console.log(meaning);
  }

  function handleEmojiClick(emoji) {
    const meaning = emojiDb[emoji];
    setMeaning(meaning);
  }

  console.log(emojisWeKnow);

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input onChange={(event) => handleEmojiInput(event)} />

      <h3 className="meaning">{meaning || "Search for Emoji"} </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => handleEmojiClick(emoji)}
            style={{ margin: "0.35rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
