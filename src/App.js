import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? '#9c4a38' : '#568046'};
  color: #fff;
  font: inherit;
  border: 1px solid #eee;
  padding: 8px 20px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 3px #eee;
  border-radius: 25px;
  transition: background .3s ease;
  &:hover {
    background-color: ${props => props.alt ? '#d97059' : '#8fc979'};  
  }
`

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

  deleteCharHandler = index => {
    let charles = this.state.inputNumber.split('');
    charles.splice(index, 1);
    let updatedCharles = charles.join('');
    this.setState({inputNumber: updatedCharles})
  }
  
  render () {

    const style2 = {
      borderRadius: '25px',
      margin: '15px 0',
      outline: 'none',
      padding: '3px 15px'
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
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

        // style.backgroundColor = '#9c4a38';
        // style[':hover'] = {
        //   backgroundColor: '#d97059'
        // }
    }

    let chars = null;

    if(this.state.inputNumber){
      console.log(this.state.inputNumber);
      chars = this.state.inputNumber.split('').map((char, index) => {
        return <Char 
          key={index} 
          letter={char}
          clicked={()=>this.deleteCharHandler(index)}>
          </Char>
      })
    }

    return (
        <div className="App">
          <h1>Hi, I'm a simple React Application</h1>
          <p className={classes.join(' ')}>List of users down below</p>
          <StyledButton
            alt={this.state.showPersons ? 1 : 0}
            onClick={this.togglePersonsHandler}>
              Toggle names list
          </StyledButton>
          {persons}
          <div>
            <input style={style2} type="text" value={this.state.inputNumber} onChange={this.numberChangedHandler} ></input>
            <p>{this.state.inputNumber}</p>
          </div>
          <Validation length={this.state.inputNumber.length} />
          {chars}
        </div>
    );
  }
}

export default App;