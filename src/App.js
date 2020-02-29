import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={ () => {console.log("I am clieked!")}} />
    </React.Fragment>
  )

  // return <h1>Hello, world!</h1>;
}

export default App;
