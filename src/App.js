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
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");

  function handleEmojiInput(event) {
    const inputEmoji = event.target.value;
    setInput(inputEmoji);
    console.log("input >>", input);
    console.log("Meaning>> ", meaning);
    // setMeaning(emojiDb[input]);
    console.log(emojiDb[inputEmoji]);
    if (inputEmoji in emojiDb) {
      console.log("Inside if block");
      setMeaning(emojiDb[inputEmoji]);
    } else {
      setMeaning("Not in our Db");

      console.log("meaning", meaning);
    }
  }

  function handleEmojiClick(emoji) {
    const meaning = emojiDb[emoji];
    setMeaning(meaning);
    // setInput("");
  }

  console.log(emojisWeKnow);

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input
        value={input}
        onChange={handleEmojiInput}
        placeholder={"Search your Emoji"}
      />

      <h3 className="meaning">{meaning} </h3>

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
