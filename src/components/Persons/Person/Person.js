import React, { Component } from 'react';
import classes from './Person.css';

import Aux from '../../../hoc/Aux';
import withClassFn from '../../../hoc/withClassFn';

class Person extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p>
          My name is {this.props.name} and I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        ></input>
        <span onClick={this.props.click} className={classes.Person_delete}>
          x
        </span>
      </Aux>
    );
  }
}

export default withClassFn(Person, classes.Person);
