import {ActionType} from '../actions';

const calculate = (state = [], action) => {
    var input = state[0];
    switch(action.type) {
        case ActionType.INSERT_NUMBER:
        var data = action.num;
        return [input === '0' ? data : input + data];
        case ActionType.CALCULATE:
            // eslint-disable-next-line no-eval
            return [eval(state[0])]
        case ActionType.CLEAR:
            return ['0']
        case ActionType.BACKSPACE:
            return [state[0] !== '0' ? state[0].slice(0, state[0].length -1) : state]
        default:
            return state
    }
}


export default function blogApp(state = {}, action) {
    return {
        input: calculate(state.input, action)
    }
}