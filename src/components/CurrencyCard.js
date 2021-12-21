import React from 'react';
import './CurrencyCard.css';
import CurrencyInput from './CurrencyInput';
import CurrencyMenu from './CurrencyMenu';

const CurrencyCard = () => {
    return (
        <div className='currency-card'>
            <h1>Currency Converter</h1>
            <div className="currency-item">
                <CurrencyInput />
                <CurrencyMenu title='From' />
                <CurrencyMenu title='To' />
            </div>
            <p className='currency-card__result blink'>
                <span>1 </span>
                <span>USD</span>
                <span> = </span>
                <span>75</span>
                <span> INR</span>
            </p>
        </div>
    )
}
// 1 USD = 75 INR
export default CurrencyCard