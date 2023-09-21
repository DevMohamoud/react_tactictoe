import React, { useState } from 'react';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextMove, setNextMove] = useState(true);
  

  console.log(squares)

  const handleSquareClick = (e) => {
    if (squares[e] || calculateWinner(squares)) { return };

    const nextSquares = squares.slice();
    if (nextMove) {
      nextSquares[e] = 'I';
    } else {
      nextSquares[e] = 'J';
    }
    setSquares(nextSquares);
    setNextMove(!nextMove);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (nextMove ? 'I' : 'J');
  }
  return(
    <>
     <div className="status">{status}</div>
     <div className="board-row">
      <Square clickSquare={() => handleSquareClick(0)} value={squares[0]}/>
      <Square clickSquare={() => handleSquareClick(1)} value={squares[1]}/>
      <Square clickSquare={() => handleSquareClick(2)} value={squares[2]}/>
     </div>
     <div className="board-row">
      <Square clickSquare={() => handleSquareClick(3)} value={squares[3]}/>
      <Square clickSquare={() => handleSquareClick(4)} value={squares[4]}/>
      <Square clickSquare={() => handleSquareClick(5)} value={squares[5]}/>
     </div>
     <div className="board-row">
      <Square clickSquare={() => handleSquareClick(6)} value={squares[6]}/>
      <Square clickSquare={() => handleSquareClick(7)} value={squares[7]}/>
      <Square clickSquare={() => handleSquareClick(8)} value={squares[8]}/>
     </div>
    </>
  )
}

function calculateWinner(squares) {
  const squareLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i=0; i<squareLines.length; i++) {
    const [a,b,c] = squareLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
      console.log(squares[a])
    }
  }
  return null;
}

