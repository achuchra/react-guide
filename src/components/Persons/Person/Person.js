import React from 'react';
import classes from './Person.css'

const person = (props) => {
    
return (
    <div className={classes.Person}>
        <p>My name is {props.name} and I'm {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} defaultValue={props.name}></input>
        <span onClick={props.click} className={classes.Person_delete}>x</span>
    </div>
    )
};

export default person;