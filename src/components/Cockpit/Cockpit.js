import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
  const classesArr = [];
  let btnClass = [classes.Button];

  if(props.showPersons) {
    btnClass.push(classes.Red);
  }


  if(props.persons.length <= 2){
    classesArr.push(classes.RedLabel);
  }
  if(props.persons.length <= 1){
    classesArr.push(classes.BoldLabel);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a simple React Application</h1>
      <p className={classesArr.join(' ')}>List of users down below</p>
      <button
        className={btnClass.join(' ')}
        alt={props.showPersons ? 1 : 0}
        onClick={props.clicked}>
          Toggle names list
      </button>
    </div>
  );
}

export default Cockpit;