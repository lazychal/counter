import React from 'react';
import s from "./RC.module.css";
import MainButton from "./MainButton";

const Inc = (props) => {

        return <div className='inc-container'>
            <MainButton title="INC"
                          classNameButton={s.inc}
                          onClick={props.countplus}
                          disabled={props.blockinc}
        />
        </div>;

};

export default Inc;