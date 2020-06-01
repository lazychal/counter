import React from 'react';
import s from "./MainButton.module.css";

const PlusMinusButton = (props) => {

    return <div className='inc-container'>
        <button onClick={props.onClick}
                disabled={props.disabled}>
            {props.title}


            id='addMin'
            onClick={() => props.setmin('addMin')}
        </button>
    </div>;

};

export default PlusMinusButton;