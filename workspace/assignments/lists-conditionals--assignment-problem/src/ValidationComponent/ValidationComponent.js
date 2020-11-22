import React from 'react';

const validationComponent = (props) => {
    let validation = 'Text too short';
    if (props.inputLength > 6) {
        validation = 'Text long enough';
    }

    return (
        <p>{validation}</p>
    );
}

export default validationComponent;