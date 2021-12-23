import './App.css';
import CurrencyCard from './components/CurrencyCard';
import React, { useEffect, useState } from 'react';

function App() {

  const apiKey = '225cd3a8dc6048849f17';

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
    // console.log(parsedData)
    const amountConverted = Object.values(parsedData)[0];
    setCurrency(amountConverted)
    // console.log(currency)
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
    if (cName !== 'NA_NA') {
      getCurrency();
    }
  }, [cName]);


  useEffect(() => {
    getCountry();
  }, [])

  return (
    <div className="App">
      <CurrencyCard countryData={countryData} getCountry={getCountryName} getAmount={getAmount}
        amount={amount} currency={currency} cName={cName} />
    </div>
  );
}

export default App;
