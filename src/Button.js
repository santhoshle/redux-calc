import React from 'react';
import { connect } from 'react-redux';
import { insertNumber, calculate, clear, backspace } from './actions';

const Button = ({cls, text, dispatch}) => {
    return (
        <div className={cls} onClick={() => {
            switch(text) {
                case '=':
                    dispatch(calculate());
                    break;
                case 'Clear':
                    dispatch(clear());
                    break;
                case 'Backspace':
                    dispatch(backspace());
                    break;
                default:
                    dispatch(insertNumber(text));
            }
        }}>{text}</div>
    );
}

export default connect()(Button)