import React from 'react'

import { useId } from 'react';

function InputBox({

    // label is a string that is used as the label for the input box
    // className is a string that is used as the class name for the input box css classname
    // onCurrencyChange is a function that is used to handle currency change
    // currencyOptions is an array of objects that are used to display currency options
    // selectCurrency is a string that is used to display selected currency
    //amount is a number that is used to display amount
    //onamountchange is a function that is used to handle amount change
    label,
    className = "",
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    amount,
    onAmountChange
}
) {

    //useId is a hook that is used to generate unique id
    const amountInputId = useId();

    return (


        <div className={`bg-white p-4 rounded-lg shadow-lg flex items-center ${className}`}>

            {/* InputBox is a functional component that is used to display input box */}
            <div className="w-1/2 pr-3">
                <label htmlFor={amountInputId} className="block text-gray-700 font-semibold mb-1">
                    {label}
                </label>


                <input
                    id={amountInputId}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>




            <div className="w-1/2 pl-3 flex flex-col items-end">
                <label className="block text-gray-700 font-semibold mb-1">Currency</label>
                <select
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>



        </div>
    );
}

export { InputBox };