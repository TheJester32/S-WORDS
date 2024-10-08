import React, { useState } from "react";
import { InitiateGameField } from "./gameField/gameField";
import { InitiateKeyboard } from "./keyboard/keyboard";

function Game() {
  const rows = 6;
  const cols = 5;

  const [gameField, setGameField] = useState(
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => ""))
  );

  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [attempts, setAttempts] = useState(1);

  const HIDDEN_WORD = "BLACK";

  const compareWords = (HIDDEN_WORD, guessedWord) => {
    if (guessedWord === HIDDEN_WORD) {
      console.log("Word matched!");
      return true;
    }

    for (let i = 0; i < guessedWord.length; i++) {
      if (guessedWord[i] === HIDDEN_WORD[i]) {
        console.log(`${guessedWord[i]} is correct and in the correct position`);
      } else if (HIDDEN_WORD.includes(guessedWord[i])) {
        console.log(`${guessedWord[i]} is correct but in the wrong position`);
      } else {
        console.log(`${guessedWord[i]} is not in the word`);
      }
    }

    return false;
  };

  const handleKeyPress = (key) => {
    if (key === "Del") {
      handleDelete();
      return;
    }

    if (key === "Ent") {
      handleEnter();
      return;
    }

    if (currentCol < cols && /^[A-Z]$/.test(key)) {
      const newGameField = [...gameField];
      newGameField[currentRow][currentCol] = key;
      setGameField(newGameField);
      setCurrentCol(currentCol + 1);
    }
  };

  const handleDelete = () => {
    if (currentCol > 0) {
      const newGameField = [...gameField];
      newGameField[currentRow][currentCol - 1] = "";
      setGameField(newGameField);
      setCurrentCol(currentCol - 1);
    }
  };

  const handleEnter = () => {
    if (currentCol === cols) {
      const guessedWord = gameField[currentRow].join("");
      const isMatched = compareWords(HIDDEN_WORD, guessedWord);

      setAttempts(attempts + 1);
      checkTheLimit(guessedWord);

      if (isMatched) {
        console.log("Congratulations! You've guessed the word.");
      } else {
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      }
    }
  };

  const checkTheLimit = (guessedWord) => {
    if (attempts === rows && HIDDEN_WORD !== guessedWord) {
      console.log("Game Over!");
      return;
    }
  };

  return (
    <div>
      <InitiateGameField gameField={gameField} />
      <InitiateKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export { Game };
