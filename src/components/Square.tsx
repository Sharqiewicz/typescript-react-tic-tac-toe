import React, { FunctionComponent, useState } from 'react';

interface SquareProps {
    onClick: () => void;
    value?: string;
}

export const Square: FunctionComponent<SquareProps> = ({value, onClick}) => {

  const [count, setCount] = useState<number | null>(5);
      setCount(null);
      setCount(12);

      return (
        <button className="square" onClick={onClick} >
          {value}
        </button>
      )
}
