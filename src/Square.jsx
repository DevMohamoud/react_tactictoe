import React from 'react';

export default function Square({ clickSquare, value }) {
  return(<button className="square" onClick={clickSquare}> {value}</button>)
}