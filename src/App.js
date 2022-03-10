import './App.css';
import CurrencyCard from './components/CurrencyCard';
import React, { useEffect, useState } from 'react';

function App() {

  const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;

  // useState
  const [currency, setCurrency] = useState(null)
  const [countryData, setCountryData] = useState([])
  const [cName, setCName] = useState("");
  const [amount, setAmount] = useState(null);

  // console.log(cName)

  const getCountryName = (cName) => {
    setCName(cName);
  }

  const getAmount = (amt) => {
    setAmount(amt);
  }

  const getCurrency = async () => {
    const url = `https://free.currconv.com/api/v7/convert?q=${cName}&compact=ultra&apiKey=${apiKey}`;
    const data = await fetch(url);
    const parsedData = await data.json()
    const amountConverted = Object.values(parsedData)[0];
    setCurrency(amountConverted)
  }


  const getCountry = async () => {
    const countryUrl = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;
    const cdata = await fetch(countryUrl);
    const cparsedData = await cdata.json();

    let cntData = []
    for (let cnt in cparsedData.results) {
      cntData.push(cparsedData.results[cnt])
    }
    cntData.sort((a, b) => a.currencyName.localeCompare(b.currencyName))
    setCountryData(cntData);
  }


  useEffect(() => {
    if (!(cName.split('_')[0] === 'NA' || cName.split('_')[1] === 'NA')) {
      getCurrency(cName);
    }

    // eslint-disable-line react-hooks/exhaustive-deps
  }, [cName]);


  useEffect(() => {
    getCountry();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <CurrencyCard countryData={countryData} getCountry={getCountryName} getAmount={getAmount}
        amount={amount} currency={currency} cName={cName} />
    </div>
  );
}

export default App;
