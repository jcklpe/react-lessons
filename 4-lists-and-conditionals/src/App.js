import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //- STATE
  state = {
    persons: [
      { id: "fdasf", name: "bob", age: 29 },
      { id: "fdfds", name: "george", age: 69 },
      { id: "fsasf", name: "bart", age: 420 }
    ],
    otherState: "some value",
    showPersons: false
  };

  //- FUNCTIONS
  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // this is apparently the old way of doing it
    //const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    person.name = event.target.value;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Test App </h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    ); //return
  } //render
}

export default App;
