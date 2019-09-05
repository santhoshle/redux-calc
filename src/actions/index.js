
export const ActionType = {
    INSERT_NUMBER: 'INSERT_NUMBER',
    CALCULATE: 'CALCULATE',
    CLEAR: 'CLEAR',
    BACKSPACE: 'BACKSPACE'
}

export const insertNumber = num => ({
    type: ActionType.INSERT_NUMBER,
    num
});

export const calculate = () => ({
    type: ActionType.CALCULATE
});

export const clear = () => ({
    type: ActionType.CLEAR
});

export const backspace = () => ({
    type: ActionType.BACKSPACE
});