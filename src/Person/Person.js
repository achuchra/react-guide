import React from 'react';

import './Person.css'

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     border-radius: 35px;
//     border-top-right-radius: 0;
//     position: relative;
// `

const person = (props) => {

// const style = {
//     '@media (min-width: 757px)' : {
//         width: '300px'
//     }
// }
    
return (
    <div>
        <p>My name is {props.name} and I'm {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} defaultValue={props.name}></input>
        <span onClick={props.click} className="Person--delete">x</span>
    </div>
    )
};

export default person;