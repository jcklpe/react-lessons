import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "aslan", age: 29 }, { name: "george", age: 29 }]
  };

  switchNameHandler = () => {
    //alert("sup dog");

    this.setState({
      persons: [{ name: "david", age: 29 }, { name: "george", age: 29 }]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Test App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          testing children props
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );

    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "this is a react app")
    // );
  }
}

export default App;
