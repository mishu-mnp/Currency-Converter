import React from 'react';
import './CurrencyMenu.css';

const CurrencyMenu = (props) => {
    return (
        <div className='currency-menu'>
            <h2>{props.title}</h2>
            <div className="countryCode">
                <select id="countryCode__option">
                    <option value="select" defaultValue='Select'>Select</option>
                    <option className='countryCode__value' value="inr">INR - Indian</option>
                    <option className='countryCode__value' value="usd">USD - US Dollar</option>
                    <option className='countryCode__value' value="aud">AUD - Australian Dollar</option>
                    <option className='countryCode__value' value="euro">EUR - Euro</option>
                </select>
            </div>
        </div>
    )
}

export default CurrencyMenu
