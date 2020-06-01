import React from 'react';
import s from "./RC.module.css";
import MainButton from "./MainButton";

const RC = (props) => {

    return (
        <div className={s.rc}>
            <MainButton title="INC"
                        classNameButton={s.inc}
                        onClick={props.countplus}
                        disabled={props.blockinc}
            />
            <MainButton title="RESET"
                        classNameButton={s.reset}
                        onClick={props.countreset}
                        disabled={props.blockres}
            />
            <MainButton title="SET"
                        classNameButton={s.reset}
                        onClick={props.showSettings}
            />
        </div>
    )
};

export default RC;