import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const inlineStyle = {
        color: 'red',
    };

    return (
        <div className="UserInput">
            <input 
            type="text" 
            onChange={props.inputChange} value={props.username}
            style={inlineStyle} />
        </div>
    );
}

export default userInput;
