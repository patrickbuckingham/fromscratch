import React from 'react';

import BugCounter from '../bugcounter/bugcounter.js';
import BugButton from '../bugbutton/bugbutton.js';
import Header from '../header/header.js';

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
        <Header />
        <BugButton killWasp={()=>this.killWasp()} />
        <BugCounter deadWasps={this.state.deadWasps} />
      </div>
  )}
}

export default App;
