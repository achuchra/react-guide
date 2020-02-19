import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffects');
    };
  });

  const classesArr = [];
  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.personsLength <= 2) {
    classesArr.push(classes.RedLabel);
  }
  if (props.personsLength <= 1) {
    classesArr.push(classes.BoldLabel);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a simple React Application</h1>
      <p className={classesArr.join(' ')}>List of users down below</p>
      <button
        className={btnClass.join(' ')}
        alt={props.showPersons ? 1 : 0}
        onClick={props.clicked}
      >
        Toggle names list
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
