import React from 'react';
import s from "./Setminmax.module.css";

const Setmin = (props) => {

    let classForMinMaxValues = (props.minError) ?
        s.displayMinRed : s.displayMinBlack;

debugger
    return (
        <div className={s.setmin}>
            <div className={s.minButtons}>
                <h2>Set min</h2>
                <span>
                    <button className={s.setButtons}
                            id='addMin'
                            onClick={() => props.setmin('addMin')}
                            disabled={props.disabledAddMin}
                    >+</button>

                    <button className={s.setButtons}
                            id='reduceMin'
                            onClick={() => props.setmin('reduceMin')}
                            disabled={props.disabledReduceMin}
                    >-</button>

                </span>
            </div>
            <div><p className={classForMinMaxValues}>{props.minVal}</p></div>
        </div>
    )
}

export default Setmin;