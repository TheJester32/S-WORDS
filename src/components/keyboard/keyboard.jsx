import React from "react";
import keyboardStyles from "./keyboard.module.scss";

function InitiateKeyboard({ onKeyPress }) {
  const row1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3Keys = ["Ent", "Z", "X", "C", "V", "B", "N", "M", "Del"];

  const handleKeyClick = (key) => {
    onKeyPress(key);
  };

  return (
    <div className={keyboardStyles.keyboard}>
      <div className={keyboardStyles.keyboard__row1}>
        {row1Keys.map((key, index) => (
          <button
            className={keyboardStyles.keyboard__button}
            key={index}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={keyboardStyles.keyboard__row2}>
        {row2Keys.map((key, index) => (
          <button
            className={keyboardStyles.keyboard__button}
            key={index}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={keyboardStyles.keyboard__row3}>
        {row3Keys.map((key, index) => (
          <button
            className={`${keyboardStyles.keyboard__button} ${
              key === "Ent" || key === "Del"
                ? keyboardStyles.keyboard__button__large
                : ""
            }`}
            key={index}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export { InitiateKeyboard };
