import React, { useState } from 'react';
import './CurrencyMenu.css';

const CurrencyMenu = (props) => {

    const [fromValue, setFromValue] = useState("NA")
    const [toValue, setToValue] = useState("NA")

    const handleFromChange = (e) => {
        setFromValue(e.target.value)
    }

    const handleToChange = (e) => {
        setToValue(e.target.value)
    }


    props.country(fromValue + '_' + toValue)


    return (
        <div className='currency-menu'>
            <div className="from-container">
                <h2>From</h2>
                <div className="countryCode">
                    <select id="countryCode__option" value={fromValue} onChange={handleFromChange}>
                        <option value="select" defaultValue='Select'>Select</option>
                        {props.countryData.map((c) => {
                            return <option className='countryCode__value' id={c.id} value={c.id}>{c.currencyName}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="to-container">
                <h2>To</h2>
                <div className="countryCode">
                    <select id="countryCode__option" value={toValue} onChange={handleToChange}>
                        <option value="select" defaultValue='Select'>Select</option>
                        {props.countryData.map((c) => {
                            return <option className='countryCode__value' id={c.id} value={c.id}>{c.currencyName}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CurrencyMenu
