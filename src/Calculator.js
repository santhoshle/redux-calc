import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Calculator ({input}) {
    return (
        <div>
        <div className="App-calculator">
          <div />
          <div className="Calc-display">
            {input}
          </div>
          <div className="Calc-data">
            <Button cls="Calc-number" text="Clear" />
            <Button cls="Calc-bkp" text="Backspace" />
            <Button cls="Calc-number" text="/" />
          </div>
          <div className="Calc-data">
            <Button cls="Calc-number" text="7" />
            <Button cls="Calc-number" text="8" />
            <Button cls="Calc-number" text="9" />
            <Button cls="Calc-number" text="*" />
          </div>
          <div className="Calc-data">
            <Button cls="Calc-number" text="4" />
            <Button cls="Calc-number" text="5" />
            <Button cls="Calc-number" text="6" />
            <Button cls="Calc-number" text="-" />
          </div>
          <div className="Calc-data">
            <Button cls="Calc-number" text="3" />
            <Button cls="Calc-number" text="2" />
            <Button cls="Calc-number" text="1" />
            <Button cls="Calc-number" text="+" />
          </div>
          <div className="Calc-data">
            <Button cls="Calc-number" text="0" />
            <Button cls="Calc-number" text="." />
            <Button cls="Calc-eq" text="=" />
          </div>
          <div />
        </div>
      </div>
    );
}

Calculator.propTypes = {
    input: PropTypes.array.isRequired
}

export default Calculator;