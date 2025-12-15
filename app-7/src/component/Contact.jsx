import React, { useState } from 'react'
import large from '../assets/slider-image-1-large.jpg'
import small from '../assets/slider-image-1-small.jpg'

const Contact = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div>
        {/* Large screen image */}
        <img 
          src={large} 
          className="w-full hidden md:block" 
        />

        {/* Small screen image */}
        <img 
          src={small} 
            className="w-full block md:hidden" 
        />
      </div>

      <div className="flex justify-center text-3xl text-center my-10">
        <div>
          <input 
            type={isShow ? 'text' : 'password'}
            className="border rounded-2xl p-3"
            placeholder="type your password"
          />

          <button 
            type="button" 
            className="bg-slate-300 p-3 rounded-2xl cursor-pointer ml-3"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact
