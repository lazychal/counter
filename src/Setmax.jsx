import React from 'react';
import s from "./Setminmax.module.css";

const Setmax = (props) => {

    let classForMinMaxValues = (props.minError) ?
        s.displayMinRed : s.displayMinBlack;

    return (
        <div className={s.setmax}>
            <div className={s.maxButtons}>
                <h2>Set max</h2>
                <span>
                <button className={s.setButtons} id='addMax'
                        onClick={() => props.setmax('addMax')}
                        disabled={props.disabled}
                >+</button>
                <button className={s.setButtons} id='reduceMax'
                        onClick={() => props.setmax('reduceMax')}
                        disabled={props.disabled}
                >-</button>
                </span>
            </div>
            <div><p className={classForMinMaxValues}>{props.maxval}</p></div>
        </div>
    )
}

export default Setmax;