import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   
  state = { 
      persons: [
        {id:'asfa1', name: 'Ann', age: 15},
        {id:'dvfga', name: 'Damian', age: 45},
        {id:'asdf3', name: 'Gregory', age: 33}
      ],
      otherState: 'Some other value',
      showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    console.log(`${personId}: ${event.target.value}`);

    //get the index of clicked name 
    const personIndex = this.state.persons.findIndex(p => p.id === personId)

    // set the new person object by destructuring proper person with the index we received
    const selectedPerson = {...this.state.persons[personIndex]};

    // set the new person name using value from the input
    selectedPerson.name = event.target.value;

    // set the new persons array by destructiring persons from the state
    const persons = [...this.state.persons];

    // set the new person values to proper persons array person
    persons[personIndex] = selectedPerson;

    // set the state using the created persons array
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px 20px',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: '1px 1px 3px #eee',
      borderRadius: '25px'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = 
        this.state.persons.map((person, index) => {
          return <Person
              click={() =>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a simple React Application</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle names list
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
