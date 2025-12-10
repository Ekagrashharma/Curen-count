import React from "react";

const MainInputBox = ({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencies = [],
  disabled = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex gap-3">
        {/* Amount Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={disabled}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Enter amount"
          min="0"
          step="0.01"
        />

        {/* Currency Selector */}
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={disabled}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed min-w-[100px]"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MainInputBox;
