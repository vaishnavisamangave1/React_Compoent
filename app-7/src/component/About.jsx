import React, { useState } from 'react'
import img1 from '../assets/slider-image-1-large.jpg'
import img2 from '../assets/slider-image-2-large.jpg'
import img3 from '../assets/slider-image-3-large.jpg'
import img4 from '../assets/slider-image-4-large.jpg'
import img5 from '../assets/slider-image-5-large.jpg'

import img6 from '../assets/slider-image-1-small.jpg'
import img7 from '../assets/slider-image-5-small.jpg'



const About = () => {


  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [img1, img2, img3, img4, img5];


  const handleNextImg = () => {
    if (imgs.length - 1 == currentImg) {
      setCurrentImg(0);
    }
    else {
      setCurrentImg(currentImg + 1);
    }

  }

  const handlePrev = () => {
    if (currentImg == 0) {
      setCurrentImg(imgs.length - 1);
    }
    else {
      setCurrentImg(currentImg - 1);
    }

  }

  return (
    <>
      <div className=' text-center my-10 p-3 '>
        <img src={imgs[currentImg]} alt='' className='w-full rounded 2-xl' />

      </div>
      <div className='flex justify-between text-center mx-10 gap-5'>
        <button type='button' className='bg-slate-400 p-3 rounded-2xl cursor-pointer text-2xl' onClick={handlePrev}>Prev</button>



        <button type='button' className='bg-slate-400 p-3 rounded-2xl cursor-pointer text-2xl' onClick={handleNextImg}>Next</button>


      </div>
    </>
  )
}

export default About
