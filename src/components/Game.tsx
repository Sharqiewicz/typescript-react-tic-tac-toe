import React, { useState, FunctionComponent } from "react";
import { Board } from './Board';


const calculateWinner = (squares: (string|null)[]) => {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export const Game: FunctionComponent = () => {
  const [history, setHistory] = useState<(null|string)[][]>( [ new Array<null|string>(9).fill(null) ] );
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXisNext] = useState<boolean>(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i: number) => {
    const historyPoint: (string|null)[][] = history.slice(0, stepNumber + 1);
    const current: (string|null)[] = historyPoint[stepNumber];
    const squares: (string|null)[] = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <div key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </div>
      );
    });

  const resetGame = () => {
    setHistory( [ new Array<null|string>(9).fill(null) ] );
    setStepNumber(0);
    setXisNext(true);
  }

  return (
    <>
      <Board squares={history[stepNumber]} handleClick={handleClick} />
      <div className="info__wrapper">
          <h3>History</h3>
          <div className="moves__wrapper">{renderMoves()}</div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        <button className="reset__game" onClick={resetGame}>RESET GAME</button>
      </div>
    </>
  );
};
