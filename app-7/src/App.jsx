import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import Register from './component/Register'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

function App() {
  
const [tab,setTab]=useState('home');
  return (
    <>
     <Navbar setTab={setTab}/>
     {tab=='home'&& <Home/>}
     {tab=='about'&& <About/>}
     {tab=='contact'&& <Contact/>}
     {tab=='counter'&& <Counter/>}

     
     

    </>
  )
}

export default App
