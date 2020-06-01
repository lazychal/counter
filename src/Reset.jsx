import React from 'react';
import s from "./RC.module.css";
import MainButton from "./MainButton";

const Reset = (props) => {

        return <div className='reset-container'>
            {/*<button className={s.reset} */}
            {/*        onClick={this.props.countreset}*/}
            {/*        disabled={this.props.blockres}>RESET*/}
            {/*</button>*/}
            <MainButton title="RESET"
                        classNameButton={s.reset}
                        onClick={props.countreset}
                        disabled={props.blockres}
            />
        </div>;
};

export default Reset;