import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { getCurrency, getCurrencyList } from './api';
import { InputBox } from "./component/InputBox";


function App() {

  //fromcountry veriable to store country name in which we want to convert base contry currency
  let [fromCountry, setFromCountry] = useState("USD");

  //toCountry veriable to store country name for which we want to convert
  let [toCountry, setToCountry] = useState("INR");

  //amount veriable to store amount
  let [amount, setAmount] = useState(1);


  //convertedCurrency veriable to store converted currency from api 
  let [convertedCurrency, setConvertedCurrency] = useState(1);


  //convertedAmount veriable to store converted amount after calculation
  //convertedAmount = amount * convertedCurrency
  let [convertedAmount, setConvertedAmount] = useState(0);


  //options veriable is used to store list of all country name
  let [options, setOptions] = useState([]);



  //getConvertedCurrency function is used to get converted currency from api
  let getConvertedCurrency = useCallback(
    () => {
      getCurrency(fromCountry, toCountry).then(
        (d) => {
          setConvertedCurrency(d.data[toCountry]);
        }
      )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }, [fromCountry, toCountry]
  )


  //useEffect is used to call getConvertedCurrency function
  //this function will get executed when application starts as well as when fromCountry or toCountry changes
  useEffect(() => {
    getConvertedCurrency();
  }, [getConvertedCurrency])



  //getCurrencyListfromApi function is used to get country name list from api
  let getCurrencyListfromApi = useCallback(
    () => {
      getCurrencyList().then(
        (data) => {

          setOptions(Object.keys(data.data));
        }
      )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }, []
  )

  //useEffect is used to call getCurrencyListfromApi function 
  useEffect(() => {
    getCurrencyListfromApi();
  }, [getCurrencyListfromApi])



  //convert is a function that is used to set convertedAmount state
  //It takes no argument and returns no value
  //It is used to set convertedAmount state with the value of amount * convertedCurrency
  let convert = () => {
    setConvertedAmount(amount * convertedCurrency);
  }



  /**
   * swap is a function that is used to swap the values of fromCountry and toCountry states
   * It takes no argument and returns no value
   * It is used to swap the values of fromCountry and toCountry states
   */
  let swap = () => {
    setFromCountry(toCountry);
    setToCountry(fromCountry);
  }



  return (


    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg p-8 backdrop-blur-md bg-white/90 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >


          {/* InputBox is a component that is used to display input box for amount and base country name */}
          <div className="mb-6">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFromCountry(currency)}
              selectCurrency={fromCountry}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>


          {/* Swap button is a button that is used to swap the values of fromCountry and toCountry states */}
          <div className="relative w-full my-2 flex justify-center">
            <button
              type="button"
              className="border border-blue-600 rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* InputBox is a component that is used to display input box for converted amount and target country name */}

          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setToCountry(currency)}
              selectCurrency={toCountry}
              amountDisable
            />
          </div>

          {/* Convert button is a button that is used to convert the amount from fromCountry to toCountry */}
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
            Convert {fromCountry.toUpperCase()} to {toCountry.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );




}

export default App
