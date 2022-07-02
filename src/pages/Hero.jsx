import React from 'react'
import heroImg from '../images/illustration-working.svg'

function Hero() {
  return (
    <main className='hero'>
      <div className="container hero-con">
        <div className='hero-text'>
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
            </p>
            <button className='get-started'>Get Started</button>
        </div>
        <div className='hero-img'>
            <img src={heroImg} alt="" />
        </div>
      </div>
    </main>
  )
}

export default Hero
