import React from 'react'

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li id={index.toString()} key={index.toString()}>
          {number}
        </li>
      ))}
    </ul>
  );
}

export default NumberList