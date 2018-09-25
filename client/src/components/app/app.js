import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      deadWasps: 0
    }
  }

  killWasp() {
    this.setState({deadWasps: this.state.deadWasps+1});
  }

  render() {
    return (
      <div>
        <div className="header">
          WASP HUNTER
        </div>
        <button onClick={()=>this.killWasp()}>
          HUNT WASP
        </button>
        <div>
          You hunted {this.state.deadWasps} wasps. Good job!
        </div>
      </div>
  )}
}

export default App;
