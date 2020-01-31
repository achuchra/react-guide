import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   
  state = { 
      persons: [
        {name: 'Ann', age: 15},
        {name: 'Damian', age: 45},
        {name: 'Gregory', age: 33}
      ],
      otherState: 'Some other value',
      showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 15},
        {name: 'Damiannnn', age: 24},
        {name: 'Greggie', age: 34}
      ]
    })
    this.showPersons = true
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Anna', age: 15},
        {name: event.target.value, age: 24},
        {name: 'Greggie', age: 34}
      ]
    })
  }
  
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
    }

    return (
      <div className="App">
        <h1>Hi, I'm a simple React Application</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('<<Anna button click>>')}>
            Some button
        </button>
        
        {
          this.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, '<<Anna person paragraph clicked>>')}
                changed={this.nameChangedHandler}/>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}>
                  Child element
              </Person>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
