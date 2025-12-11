import React from 'react'
import { useState } from 'react';

const Swapbtn = () => {
  const [from, setfrom] = useState("USD");
    const [to, setTo] = useState("INR");

    const swap = () => {
    setTo(from), setfrom(to);
  };

  return (
    <div className='flex justify-center p-2'>
        <button className='bg-blue-500 w-auto rounded-sm shadow-xl p-2 py-1 text-white hover:bg-blue-600'
        onClick={swap}>Swap</button>
      
    </div>
  )
}

export default Swapbtn

