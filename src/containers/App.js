import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
   
  state = { 
      persons: [
        {id:'asfa1', name: 'Ann', age: 15},
        {id:'dvfga', name: 'Damian', age: 45},
        {id:'asdf3', name: 'Gregory', age: 33}
      ],
      otherState: 'Some other value',
      showPersons: false,
      inputNumber: ''
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

  numberChangedHandler = event => {
    this.setState({inputNumber: event.target.value})
  }
  
  render () {

    let persons = null;

    if(this.state.showPersons){
      persons = 
        <Persons
          persons = {this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}>
        </Persons>
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}>
          </Cockpit>
          {persons}
        </div>
    );
  }
}

export default App;