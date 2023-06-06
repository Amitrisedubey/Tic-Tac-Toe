import { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  console.log(state);
  const [isXTurn, setisXTurn] = useState(true);
  const handleClick = (index) => {
    console.log(index);
    if (state[index] !== null) {
      return;
    }
    const turnState = [...state];
    turnState[index] = isXTurn ? "X" : "0";
    setState(turnState);
    setisXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  return isWinner ? (
    <div style={{ textAlign: "center", marginTop: "65px" }}>
      <h1>{isWinner} won the game</h1>
      <button
        style={{
          border: "none",
          backgroundColor: "blue",
          color: "white",
          height: "45px",
          borderRadius: "8px",
        }}
        onClick={() => setState(Array(9).fill(null))}
      >
        Play Again
      </button>
    </div>
  ) : (
    <div className="board-container">
      <h1 style={{ textAlign: "center", color: "#FFE7A0" }}>Tic Tac Toe</h1>
      <h4
        style={{
          color: "#FFE7A0",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        Player {isXTurn ? "X" : "0"} please move
      </h4>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
};
