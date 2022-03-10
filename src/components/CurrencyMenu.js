import React, { useEffect, useState } from 'react';
import './CurrencyMenu.css';

const CurrencyMenu = ({ country, countryData }) => {

    const [fromValue, setFromValue] = useState("NA")
    const [toValue, setToValue] = useState("NA")

    const handleFromChange = (e) => {
        setFromValue(e.target.value)
    }

    const handleToChange = (e) => {
        setToValue(e.target.value)
    }

    useEffect(() => {
        if (!(fromValue === 'NA' || toValue === 'NA')) {
            country(fromValue + '_' + toValue)
        }
    }, [fromValue, toValue]);

    // console.log(fromValue)
    // console.log(toValue)


    return (
        <div className='currency-menu'>
            <div className="from-container">
                <h2>From</h2>
                <div className="countryCode">
                    <select id="countryCode__option" name='fromCountry' value={fromValue} onChange={handleFromChange}>
                        <option value="select" defaultValue='Select'>Select</option>
                        {countryData.map((c) => {
                            return <option className='countryCode__value' key={c.id + 'f'} id={c.id + 'f'} value={c.id}>{c.currencyName}  {c.currencySymbol}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="to-container">
                <h2>To</h2>
                <div className="countryCode">
                    <select id="countryCode__option" name='toCountry' value={toValue} onChange={handleToChange}>
                        <option value="select" defaultValue='Select'>Select</option>
                        {countryData.map((c) => {
                            return <option className='countryCode__value' key={c.id + 't'} id={c.id + 't'} value={c.id}>{c.currencyName} {c.currencySymbol}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CurrencyMenu
