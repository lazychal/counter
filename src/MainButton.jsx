import React from 'react';

const MainButton = (props) => {

        return <div className='inc-container'>
            <button className={props.classNameButton}
                    onClick={props.onClick}
                    disabled={props.disabled}>
                {props.title}
            </button>
        </div>;

};

export default MainButton;