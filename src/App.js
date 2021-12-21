import './App.css';
import CurrencyCard from './components/CurrencyCard';
import React, { useEffect, useState } from 'react';

function App() {

  const apiKey = '05cc98f0fe5e1d8e5248';

  // useState
  const [currency, setCurrency] = useState("")
  const [countryData, setCountryData] = useState([])
  const [cName, setCName] = useState("");
  const [amount, setAmount] = useState(null);

  const getCountryName = (cName) => {
    setCName(cName);
  }

  const getAmount = (amt) => {
    setAmount(amt);
  }

  const getCurrency = async () => {
    // const url = `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=${apiKey}`;
    const url = `https://free.currconv.com/api/v7/convert?q=${cName}&compact=ultra&apiKey=${apiKey}`;
    const data = await fetch(url);
    console.log(data)
    const parsedData = await data.json()
    setCurrency(parsedData.cName)
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
    // console.log("Sorted Data >>>", cntData);
    setCountryData(cntData);
  }



  useEffect(() => {
    getCurrency();
  }, [cName]);

  getCountry();
  // console.log(countryData)
  // console.log(cName)
  // console.log(currency.cName)

  return (
    <div className="App">
      {/* <h1>Currency Converter</h1> */}
      <span>Selected From_To {cName}</span>
      <span>Converting amount = {amount} </span>
      <span>cnt amount = {currency ? 'NULL' : currency.cName} </span>
      <CurrencyCard countryData={countryData} getCountry={getCountryName} getAmount={getAmount} />
    </div>
  );
}

export default App;
