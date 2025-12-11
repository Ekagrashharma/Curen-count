import { useState } from "react";
import InputBox from "./components/InputBox";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

    const swap = () => {
    setTo(from), setFrom(to);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?_gl=1*d2c4z*_ga*MjE0MDYzOTIxNy4xNzYyOTMxOTQ1*_ga_8JE65Q40S6*czE3NjU0MzY5MzUkbzIkZzEkdDE3NjU0MzY5OTgkajU5JGwwJGgw)`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="w-[360px] bg-gray-300 p-6 rounded-lg shadow-xl space-y-4">
          <InputBox
            label="From"
            amount={convertedAmount}
            onCurrencyChange={(currency) => {
              setamount(amount);
            }}
            selectCurrency="from"
            onAmountChange={(amount) => setamount(amount)}
            currencyOptions={option}
          />
          <div className="flex justify-center p-2">
            <button
              className="bg-blue-500 w-auto rounded-sm shadow-xl p-2 py-1 text-white hover:bg-blue-600"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            onCurrencyChange={(currency) => {
              setTo(currency);
            }}
            selectCurrency="To"
            
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
