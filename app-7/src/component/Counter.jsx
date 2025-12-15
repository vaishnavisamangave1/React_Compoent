import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(2);

    const handleIncreaseCounter =()=>{
        setCount(count +1)
    }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
        <button type='button' onClick={()=>setCount(count-1)}>-

        </button>
        <h1>{count}</h1>
        <button type='button' onClick={handleIncreaseCounter}>+</button>
      </div>
    </div>
  )
}

export default Counter
