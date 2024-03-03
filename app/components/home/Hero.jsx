import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero-bg ">
      <div></div>
      <div className="flex justify-center flex-col items-center h-full text-white">
        <div className='animate__animated animate__bounceIn'>
          <Image src={'/images/lawyerImg.png'} width={1000} height={1000} />
        </div>
        <div className='md:flex flex-wrap gap-5 md:text-lg font-light'>
          <a href="mailto:lawrichardharris@gmail.com">lawrichardharris@gmail.com</a>
          <a href="tel:+9177930837">+9177930837</a>
        </div>
      </div>
    </div>
  )
}

export default Hero