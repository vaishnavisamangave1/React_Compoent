import React, { useState } from 'react'

const Home = () => {
    const [input, setInput] = useState('');
    const [name, setName] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);


    }
    const greetUser = () => {
        setName(input);
        setInput('');

    }
    return (
        <div className=' text-3xl text-center my-10'>
            <input type='text' placeholder='enter your name..' className='border rounded-2xl p-3' onChange={handleChange} value={input}/>

            <div className='mt-10'>
                <button type='button ' className='bg-slate-700 text-white rounded-2xl p-4' onClick={greetUser}>Greet</button>
            </div>
            {name.length > 0 &&
                <h1 className='mt-10 text-6xl'>Good Morning,{name}..</h1>
            }
        </div>
    )
}

export default Home
