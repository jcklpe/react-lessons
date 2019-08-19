import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: ["realMarkFishertwitter"]
  };

  changeUsername = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: "pink"
    };
    return (
      <div className="App">
        <h1>Test App</h1>
        <UserOutput username="jcklpe" />
        <UserOutput username={this.state.username} />

        <UserInput
          changed={this.changeUsername}
          currentName={this.state.username}
        />
      </div>
    );
  }
}

export default App;
