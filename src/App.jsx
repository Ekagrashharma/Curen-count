import React from "react";
import InputBox from "./components/InputBox";
import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* CARD: give it width and padding so children have room */}
      <div className="w-[360px] bg-white p-6 rounded-lg shadow-xl space-y-4">
        <InputBox />
        <div className="text-center text-sm text-gray-500">swap</div>
        <InputBox />
        <button className="w-full py-3 bg-violet-600 text-white rounded-md">Convert</button>
      </div>
    </div>
  );
};

export default App;
