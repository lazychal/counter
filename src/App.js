import React from 'react';
import './App.css';
import RC from "./RC";
import Display from "./Display";
import Setmin from "./Setmin";
import Setmax from "./Setmax";
import MainButton from "./MainButton";
import s from "./MainButton.module.css";
import {connect} from "react-redux";
import {
    addCounterAC,
    disableSetButtonAC,
    maxValueAC,
    resetCounterAC,
    setMaxButtonAC,
    setMinButtonAC,
    showSetAC
} from "./redux/reducer";

class App extends React.Component {

    state = {
        // count: 0,
        // maxVal: 5,
        // minVal: 0,
        // minError: false,
        // setButtonDisabled: true,
        // newDisable: false,
        // disabledReduceMin: false,
        // disabledAddMin: false,
        // disabledReduceMax: false,
        // displayWhileSet: 'Yes please',
        // setVis: false,
    };


    componentDidMount() {
        this.restoreState();
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state', stateAsString);
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem('state');
        if (stateAsString !== null) {
            let stateAsObject = JSON.parse(stateAsString);
            this.setState(stateAsObject);
        }
        this.setState({setButtonDisabled: true});
    };

    hardMinValue = (id) => {
        // let minValue;
        // let error;
        // let currentMin = this.state.minVal;
        // let currentMax = this.state.maxVal;
        // if (id === 'addMin' && currentMin < currentMax) {
        //     minValue = this.state.minVal + 1;
        //     this.setState({disabledReduceMin: false, minError: false})
        // } else if (this.state.minVal === this.state.maxVal) {
        //     minValue = this.state.maxVal;
        //     this.setState({disabledAddMin: true, minError: true});
        // }
        // if (id === 'reduceMin' && this.state.minVal > 0) {
        //     minValue = this.state.minVal - 1;
        //     this.setState({disabledAddMin: false, minError: false});
        // } else if (id === 'reduceMin' && this.state.minVal === 0) {
        //     minValue = 0;
        //     this.setState({disabledReduceMin: true, disabledAddMin: false})
        //     error = true;
        //     this.setState({minError: error})
        // }
        // this.setState({minVal: minValue}, () => {
        //     this.saveState()
        // });
        // this.setState({setButtonDisabled: false, count: minValue});
    };
    hardMaxValue = (id) => {
        // let maxValue;
        // let disabledReduceMax;
        // let error;
        // if (id === 'addMax') {
        //     maxValue = this.state.maxVal + 1;
        //     disabledReduceMax = false;
        // } else if (id === 'reduceMax' && this.state.minVal === this.state.maxVal) {
        //     maxValue = this.state.minVal;
        //     disabledReduceMax = true;
        //     error = true;
        // } else {
        //     maxValue = this.state.maxVal - 1;
        // }
        // this.setState({
        //     maxVal: maxValue, disablesAddMin: false,
        //     setButtonDisabled: false, disabledReduceMax: disabledReduceMax, minError: error
        // }, () => {
        //     this.saveState()
        // });
    };

    countPlus = () => {
    //     // let newCount = this.state.count;
    //     // newCount += 1;
    //     // this.setState({count: newCount}, () => {
    //     //     this.saveState()
    //     // });
    //
    //
    };

    countReset = () => {
        // this.setState({count: this.state.minVal}, () => {
        //     this.saveState()
        // })
    };

    setClickDisabled = () => {
        // let counterValue = this.state.minVal;
        // this.setState({setButtonDisabled: true, count: counterValue,
        //     minError: false, setVis: false});
    };

    showSettings = () => {
        // this.setState({setVis: true})
    };
    
    render = () => {
        return (
            <div className="counter">
                <div className={this.props.setVis ? 'counterProperties' : 'counterPropertiesHidden'}>
                    <Setmin setmin={this.props.setMinButton}
                            minVal={this.props.minVal}
                            minError={this.props.minError}
                            disabledReduceMin={this.props.disabledReduceMin}
                            disabledAddMin={this.props.disabledAddMin}
                    />
                    <Setmax setmax={this.props.setMaxButton}
                            maxval={this.props.maxVal}
                            minError={this.props.minError}
                    />
                    <div>
                        <MainButton title={'SET'}
                                    classNameButton={s.mainButton}
                                    onClick={this.props.disableSetButton}
                                    disabled={this.props.setButtonDisabled}
                        />
                    </div>
                </div>
                <div className={this.props.setVis ? 'myCounterHidden' : 'myCounter'}>
                    <Display count={this.props.count}
                             maxVal={this.props.maxVal}
                             displayWhileSet={this.props.displayWhileSet}
                             disabledSetStatus={this.props.setButtonDisabled}
                    />
                    <RC countplus={this.props.addCounter}
                        countreset={this.props.resetCounter}
                        blockinc={this.props.count >= this.props.maxVal || !this.props.setButtonDisabled}
                        blockres={this.props.count === this.props.minVal || !this.props.setButtonDisabled}
                        showSettings={this.props.showSet}
                    />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        maxVal: state.maxVal,
        minVal: state.minVal,
        minError: state.minError,
        setButtonDisabled: state.setButtonDisabled,
        newDisable: state.newDisable,
        disabledReduceMin: state.disabledReduceMin,
        disabledAddMin: state.disabledAddMin,
        disabledReduceMax: state.disabledReduceMax,
        displayWhileSet: state.displayWhileSet,
        setVis: state.setVis,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCounter: () => {
            dispatch(addCounterAC());
        },
        resetCounter: () => {
            dispatch(resetCounterAC());
        },
        showSet: () => {
            dispatch(showSetAC());
        },
        disableSetButton: () => {
            debugger
            dispatch(disableSetButtonAC());
        },
        setMaxButton: (id) => {
            dispatch(setMaxButtonAC(id));
        },
        setMinButton: (id) => {
            dispatch(setMinButtonAC(id));
        },


    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;



