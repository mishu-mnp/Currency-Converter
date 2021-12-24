import React, { useState } from 'react';
import './CurrencyInput.css';

const CurrencyInput = (props) => {

    const [amountValue, setAmountValue] = useState("");

    const handleOnChange = (e) => {
        setAmountValue(e.target.value)
    }

    const handleAmount = () => {
        props.getAmount(amountValue);
        setAmountValue('');
    }

    return (
        <div className='currency-input'>
            {/* <h3>Currency Input</h3> */}
            <h2>Amount</h2>
            <div className="amount">
                <input type="text" placeholder='enter amount' className='amount__value' id='amtValue' value={amountValue} onChange={handleOnChange} />
                <span className='search__icon' onClick={handleAmount}><i className="fas fa-search"></i></span>
            </div>
        </div>
    )
}

export default CurrencyInput
