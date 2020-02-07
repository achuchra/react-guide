import React from 'react';

const Validation = (props) => {

    let validationMessage = 'No input text!';

    if(props.length >= 1 && props.length <= 5) validationMessage = 'Text too short';
    if(props.length > 5) validationMessage = 'Text long enough';

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation