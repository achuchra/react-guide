import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor call. You can define state here');
  }

  state = { 
      persons: [
        {id:'asfa1', name: 'Ann', age: 15},
        {id:'dvfga', name: 'Damian', age: 45},
        {id:'asdf3', name: 'Gregory', age: 33}
      ],
      otherState: 'Some other value',
      showPersons: false,
      inputNumber: '',
      showCockpit: true,
      changeCounter: 0
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('[App.js] getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
   
  componentDidMount = () => {
    console.log('[App.js] componentDidMount');
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
    // this.setState({persons: persons});

    // preffered way to setState if a new state depends on prevState since it might happen asynchronously
    this.setState((prevState, props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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

    console.log('[App.js] rendering...');

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
        <WithClass classes={classes.App}>
          <button 
            onClick={
              () => this.setState({showCockpit: false})
            }>`Remove cockpit</button>
          { this.state.showCockpit ? <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}>
          </Cockpit> : null }
          {persons}
        </WithClass>
    );
  }
}

export default App;