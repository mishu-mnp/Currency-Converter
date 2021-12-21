import './App.css';
import CurrencyCard from './components/CurrencyCard';
import React, { useEffect, useState } from 'react';

function App() {

  const apiKey = '05cc98f0fe5e1d8e5248';
  // useState
  const [currency, setCurrency] = useState("")
  const [country, setCountry] = useState([])
  // const [currencyData, setCurrencyData] = useState([])


  const getCurrency = async () => {
    const url = `https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=${apiKey}`;
    const data = await fetch(url);
    const parsedData = await data.json()
    setCurrency(parsedData)
  }

  const getCountry = async () => {
    const countryUrl = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;
    const cdata = await fetch(countryUrl);
    const cparsedData = await cdata.json();
    // console.log(cparsedData);
    // setCountry(cparsedData.results)
    let cntData = []
    // console.log(cparsedData.results[0].Object.currencyName);
    for (let cnt in cparsedData.results) {
      cntData.push(cparsedData.results[cnt])
    }
    // console.log(cntData)
    setCountry(cntData);
  }

  useEffect(() => {
    getCurrency();
    getCountry();
  }, []);



  // console.log(currency)
  // console.log(country)
  // console.log(country.results)

  // let cntData = []
  // for (let [key, value] of Object.entries(country)) {
  //   cntData.push(value)
  //   // console.log(key, value.currencyName, value.currencySymbol, value.id);
  // }

  // setCurrencyData(cntData);

  // console.log(currencyData)

  // const getDetailedData = () => {
  //   let cntData = currencyData.map((cnt) => {
  //     console.log(cnt.currencyName)
  //     return cnt
  //   })
  //   console.log(cntData)
  // }

  // getDetailedData();

  console.log(country)


  return (
    <div className="App">
      {/* <h1>Currency Converter</h1> */}
      <CurrencyCard />
    </div>
  );
}

export default App;
