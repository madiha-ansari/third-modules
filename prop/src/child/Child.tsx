import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {props.name && <p>Hello, my name is {props.name}</p>}
      {props.course && <p>Hello, my name is {props.course}</p>}
    </div>
  );
}

export default Child;
