import React, {FunctionComponent} from 'react';
import { Square } from './Square';

interface Props{
  squares: string[];
  handleClick: (i: number) => void;
}


export const Board: FunctionComponent<Props> = ({squares, handleClick}) => {

    function renderSquare(i:number) {
      return <Square value={squares[i]} onClick={ () => handleClick(i)} />
    }

    return (
    <div>
        <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
    </div>
    );
}

export default Board;