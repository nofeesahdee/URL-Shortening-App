import React from 'react'
import iconBrand from '../images/icon-brand-recognition.svg'
import iconDetailed from '../images/icon-detailed-records.svg'
import iconCustomizable from '../images/icon-fully-customizable.svg'
import ShortenForm from '../layout/ShortenForm'
import ShortenOutputList from '../layout/ShortenOutputList'

function Statistics( { handleAdd, output }) {
  return (
    <main className='statistics'>
        <div className="container stat-con">
            <ShortenForm handleAdd={handleAdd} output={output}/>
            <ShortenOutputList output={output}/>
            <div className='advanced'>
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>
            <div className='offers'>
                <div className='brand'>
                    <div className='img-bg'><img src={iconBrand} alt="icon-brand"/></div>
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className='details'>
                    <div className='img-bg'><img src={iconDetailed} alt="icon-detailed"/></div>
                    <h3>Detailed Records</h3>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className='customizable'>
                    <div className='img-bg'><img src={iconCustomizable} alt="icon-customizable"/></div>
                    <h3>Fully Customizable</h3>
                    <p>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement..
                    </p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Statistics
