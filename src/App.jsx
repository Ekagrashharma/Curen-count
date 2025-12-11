import React from "react";
import InputBox from "./components/InputBox";
import "./App.css";
import Swapbtn from "./components/Swapbtn";

const App = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?_gl=1*d2c4z*_ga*MjE0MDYzOTIxNy4xNzYyOTMxOTQ1*_ga_8JE65Q40S6*czE3NjU0MzY5MzUkbzIkZzEkdDE3NjU0MzY5OTgkajU5JGwwJGgw)`,
      }}
    >
      <div className="w-[360px] bg-gray-300 p-6 rounded-lg shadow-xl space-y-4">
        <InputBox 
        label="from"/>
        <Swapbtn />
        <InputBox />
        <button className="w-full py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700">
          Convert
        </button>
      </div>
    </div>
  );
};

export default App;
