import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>
{
    return (
        <div className="Person">
            <p onClick={props.click}>
                I'm {props.name}, and I am {props.age} years old
            </p>
            <p>
                {props.children}
            </p>
        </div>
    )
};

export default UserOutput;