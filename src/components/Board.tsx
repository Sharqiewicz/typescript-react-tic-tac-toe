import React, {FunctionComponent} from 'react';
import { Square } from './Square';

interface Props{
  squares: string[];
  handleClick: (i: number) => void;
}


export const Board: FunctionComponent<Props> = ({squares, handleClick}) => {


    return (
    <div className="board__container">
        { squares.map( (square: string, index:number): React.ReactNode => <Square value={square} onClick={ () => handleClick(index)} key={index}/>)}
    </div>
    );
}

export default Board;