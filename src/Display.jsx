import React from 'react';
import s from './Display.module.css';



const Display = (props) => {
    let classForDisplay = (props.count === props.maxVal) ? s.redDisplay : s.display;
    return(
        <div className={classForDisplay}>
            {props.disabledSetStatus ? props.count : props.displayWhileSet}
    </div>
    )
};

export default Display;