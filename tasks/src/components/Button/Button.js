import React from 'react';

const Button = (props) => {
    let {activeParam, name, handleFunction} = props
    return (
        <button 
            disabled={activeParam}
            onClick={(event) => handleFunction(event)}
        >
            {name}
        </button>
    )
}

export default Button;