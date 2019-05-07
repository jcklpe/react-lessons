import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component
{
  state = {
    persons: [
      { name: 'David', age: 28 },
      { name: 'Max', age: 29 },
      { name: 'Georgie', age: 2 }
    ]
  }

  switchNameHandler = (newName) =>
  {
    //console.log('was clicked');
    // this.state.persons[0].name = "Aslan"
    this.setState({
      persons: [
        { name: newName },
        { name: 'Max', age: 29 },
        { name: 'Georgie', age: 2 }
      ]
    })
  }

  nameChangeHandler = (event) =>
  {
    //console.log('was clicked');
    // this.state.persons[0].name = "Aslan"
    this.setState({
      persons: [
        { name: 'Azlo' },
        { name: event.target.value, age: 29 },
        { name: 'Georgie', age: 2 }
      ]
    })
  }



  render()
  {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div
        className="App"
      >
        <h1>Hi, I'm a React App</h1>
        <p>
          This is really working!
        </p>
        <button
          style={style}
          onClick={() => this.switchNameHandler.bind(this, 'Aslan')
          }>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Azlan')}
        >
          My Hobbies: Art
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        >
          null interior
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} >
          null interior
        </Person>
      </div >

    )
  }
}

export default App;
