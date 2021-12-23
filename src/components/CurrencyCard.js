import React from 'react';
import './CurrencyCard.css';
import CurrencyInput from './CurrencyInput';
import CurrencyMenu from './CurrencyMenu';

const CurrencyCard = (props) => {
    console.log(props.amount)
    console.log(props.cName)

    return (
        <div className='currency-card'>
            <h1>Currency Converter App</h1>
            <div className="currency-item">
                <CurrencyInput getAmount={props.getAmount} />
                <CurrencyMenu countryData={props.countryData} country={props.getCountry} />
            </div>
            <div className="currency">
                <h2>Calculated Currency</h2>
                <p className='currency-card__result'>
                    <span className='one-amount'>{props.amount === null ? '' : `1 ${props.cName.split('_')[0]} = ${props.amount} ${props.cName.split('_')[1]}`}</span>
                    <span>{props.amount === null ? '' : props.amount} </span>
                    <span>{props.cName === 'NA_NA' ? '' : props.cName.split('_')[0]} </span>
                    <span>{props.amount === null ? '' : '='} </span>
                    <span>{props.amount === null ? '' : props.amount * props.currency}</span>
                    <span> {props.cName === 'NA_NA' ? '' : props.cName.split('_')[1]}</span>
                </p>
            </div>
        </div>
    )
}
// 1 USD = 75 INR
export default CurrencyCard
