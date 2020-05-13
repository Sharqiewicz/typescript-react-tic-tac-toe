import React, { FunctionComponent } from 'react';

interface SquareProps {
    onClick: () => void;
    value?: string;
}

export const Square: FunctionComponent<SquareProps> = ({value, onClick}) => {

      return (
        <button className="square" onClick={onClick} >
          {value}
        </button>
      )
}
