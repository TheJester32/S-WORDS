import React from "react";
import { useState } from "react";
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
  
    const handleKeyPress = (key) => {
      if (key === 'Del') {
        handleDelete();
        return;
      }
  
      if (key === 'Ent') {
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
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
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