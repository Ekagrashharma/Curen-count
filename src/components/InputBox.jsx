import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  AmountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className="flex flex-col gap-3 shadow-2xl bg-gray-200 p-4 rounded-lg">
      <div className="flex justify-between gap-3">
        <span className="block text-sm text-gray-700">{label}</span>
        <span className="block text-sm text-gray-700">Currency Type</span>
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Enter amount"
          className="w-full bg-white text-gray-700 rounded-sm p-3 border"
          disabled={AmountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />

        {/* fixed width select so it doesn't collapse */}
        <select
          className="w-24 bg-white p-3 rounded-sm border shrink-0"
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
};

export default InputBox;
