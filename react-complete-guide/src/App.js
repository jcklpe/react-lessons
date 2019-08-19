import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "bob", age: 29 },
      { name: "george", age: 29 },
      { name: "george", age: 29 }
    ],
    otherState: "some value"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "george", age: 29 },
        { name: "george", age: 29 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "dang", age: 29 },
        { name: event.target.value, age: 29 },
        { name: "george", age: 29 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "pink"
    };
    return (
      <div className="App">
        <h1>Test App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "bambino")}
          changed={this.nameChangedHandler}
        />
        <button style={style} onClick={() => this.switchNameHandler("bobber")}>
          Switch Name
        </button>
      </div>
    );
  }
}

export default App;
