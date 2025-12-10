import React from "react";

const InputBox = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="block text-sm text-gray-700">From / To</span>

      <div className="flex gap-3 items-center">
        {/* input grows to fill remaining space */}
        <input
          type="text"
          placeholder="Enter amount"
          className="w-full bg-white text-gray-700 rounded-sm p-3 border"
        />

        {/* fixed width select so it doesn't collapse */}
        <select className="w-24 bg-white p-3 rounded-sm border flex-shrink-0">
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>JPY</option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;
