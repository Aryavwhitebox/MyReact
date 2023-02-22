import React from 'react'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tech: "Ui",
      tech2: "react",
      color: "red"
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.tech}</h1>
        <p>
          It is a {this.state.color}
          {this.state.tech2}
          
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
export default App
