import React from 'react';
import './CurrencyInput.css';

const CurrencyInput = () => {
    return (
        <div>
            {/* <h3>Currency Input</h3> */}
            <h2>Amount</h2>
            <div className="amount">
                <input type="text" className='amount__value' />
                <i className='currency__icon'>$</i>
            </div>
        </div>
    )
}

export default CurrencyInput
