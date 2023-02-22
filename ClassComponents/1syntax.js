import React from 'react'
class App extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

export default App

//here we use constructor to initialize the component
//constructor and super method both helps to get the functions from React.Component
