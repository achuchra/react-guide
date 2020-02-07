import React from 'react';
import './Char.css'

const Char = (props) => {

    return (
        <div className="charComp" onClick={props.clicked}>
            {props.letter}
        </div>
    )
}

export default Char;