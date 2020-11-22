import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const inlineStyle = {
        color: 'blue',
    };

    return (
        <div className="UserOutput" 
            style={inlineStyle}>
            <p>Username: {props.username} | Consequat cillum sint pariatur sunt ipsum voluptate duis.</p>
            <p>Username: {props.username} | Non laboris nulla quis officia ullamco esse magna dolore. Magna ex magna do velit eiusmod. Irure adipisicing enim tempor aliqua est anim id voluptate sint nostrud. Sit amet anim sint esse proident consectetur aliquip ad ea ullamco veniam esse. Aute do voluptate mollit do id aliquip sint adipisicing.</p>
        </div>
    );
}

export default userOutput;
