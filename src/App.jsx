import React, { useState } from "react";
import InputBox from "./components/InputBox";
import "./App.css";
import Swapbtn from "./components/Swapbtn";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);

  

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?_gl=1*d2c4z*_ga*MjE0MDYzOTIxNy4xNzYyOTMxOTQ1*_ga_8JE65Q40S6*czE3NjU0MzY5MzUkbzIkZzEkdDE3NjU0MzY5OTgkajU5JGwwJGgw)`,
      }}
    >
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="w-[360px] bg-gray-300 p-6 rounded-lg shadow-xl space-y-4">
          <InputBox
            label={"from"}
            amount={convertedAmount}
            onCurrencyChange={(currency) => {setamount(amount);}}
            selectCurrency="from"
            AmountDisable
            onAmountChange={(amount)=>setamount(amount)}
            currencyOptions={option}
          />
          <Swapbtn 
          
          />
          <InputBox 
          label={"To"}
            amount={convertedAmount}
            onCurrencyChange={(currency) => {setTo(currency);}}
            selectCurrency="To"
            AmountDisable
            currencyOptions={option}
          />
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700"
          >
            Convert {from.toUpperCase()}to {to.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
