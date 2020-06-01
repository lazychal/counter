export const ADD_COUNTER = 'ADD_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SHOW_SET = 'SHOW_SET';
export const DISABLE_SET_BUTTON = 'DISABLE_SET_BUTTON';
export const SET_MAX_BUTTON = 'SET_MAX_BUTTON';
export const SET_MIN_BUTTON = 'SET_MIN_BUTTON';

const initialState = {
    count: 4,
    maxVal: 10,
    minVal: 0,
    minError: false,
    setButtonDisabled: true,
    newDisable: false,
    disabledReduceMin: false,
    disabledAddMin: false,
    disabledReduceMax: false,
    displayWhileSet: 'Yes please',
    setVis: false,
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                count: state.count + 1
            };
        case RESET_COUNTER:
            return {
                ...state,
                count: state.minVal
            };
        case SHOW_SET:
            return {
                ...state,
                setVis: true
            };
        case DISABLE_SET_BUTTON:
            return {
                ...state,
                setButtonDisabled: true,
                count: state.minVal,
                minError: false,
                setVis: false
            };
        case SET_MAX_BUTTON:
            let maxValue;
            let disabledReduceMax;
            let error;
            if (action.id === 'addMax') {
                maxValue = state.maxVal + 1;
                disabledReduceMax = false;
            } else if (action.id === 'reduceMax' && state.minVal === state.maxVal) {
                maxValue = state.minVal;
                disabledReduceMax = true;
                error = true;
            } else {
                maxValue = state.maxVal - 1;
            }
            return {
                ...state,

                maxVal: maxValue,
                disablesAddMin: false,
                setButtonDisabled: false,
                disabledReduceMax: disabledReduceMax,
                minError: error
            };
        case SET_MIN_BUTTON:
            let minValue;
            if (action.id === 'addMin' && state.minVal < state.maxVal) {
                minValue = state.minVal + 1;
                return {
                    ...state, minVal: minValue, count: minValue,
                    disabledReduceMin: false, minError: false,
                    setButtonDisabled: false,
                };
            } else if (state.minVal === state.maxVal) {
                minValue = state.maxVal;
                return {
                    ...state, minVal: minValue, count: minValue,
                    disabledAddMin: true, minError: true,
                    setButtonDisabled: false,
                };
            }
            if (action.id === 'reduceMin' && state.minVal > 0) {
                minValue = state.minVal - 1;
                return {
                    ...state, minVal: minValue, count: minValue,
                    disabledAddMin: false, minError: false,
                    setButtonDisabled: false,
                };
            } else if (action.id === 'reduceMin' && state.minVal === 0) {
                minValue = 0;
                return {
                    ...state, minVal: minValue, count: minValue,
                    disabledReduceMin: true, disabledAddMin: false,
                    minError: true, setButtonDisabled: false,
                };
            }

        default:
            return state;
    }


};


export const addCounterAC = () => ({type: ADD_COUNTER});
export const resetCounterAC = () => ({type: RESET_COUNTER});
export const showSetAC = () => ({type: SHOW_SET});
export const disableSetButtonAC = () => ({type: DISABLE_SET_BUTTON});
export const setMaxButtonAC = (id) => ({type: SET_MAX_BUTTON, id});
export const setMinButtonAC = (id) => ({type: SET_MIN_BUTTON, id});


export default reducer;