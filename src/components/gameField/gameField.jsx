import React from "react";
import gameFieldStyles from "./gameField.module.scss";

function InitiateGameField({ gameField }) {
    return (
      <div className={gameFieldStyles.board}>
        {gameField.map((row, rowIndex) => (
          <div key={rowIndex} className={gameFieldStyles.board__row}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={gameFieldStyles.board__tile}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

export { InitiateGameField };
