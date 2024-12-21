import React from 'react';
import Child from './child/Child';

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name="Ali" />
      <Child course="web developement" />
    </div>
  );
};

export default App;
