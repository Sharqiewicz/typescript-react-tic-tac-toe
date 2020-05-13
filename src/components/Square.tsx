import React, { FunctionComponent } from 'react';

interface SquareProps {
    onClick: () => void;
    value?: string;
}

export const Square: FunctionComponent<SquareProps> = ({value, onClick}) => {

      return (
        <button className="square__container" onClick={onClick} >
          {value}
        </button>
      )
}
