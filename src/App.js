import React, { Component } from 'react';
import CallBar from './call-bar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRinging: false
    };
  }

  makeACall = () => {
    this.setState({ isRinging: true });
  };

  render() {
    return (
      <div>
        <div className="App">
          <button onClick={this.makeACall}>Make a call</button>
          <CallBar isRinging={this.state.isRinging} />
        </div>
      </div>
    );
  }
}

export default App;
