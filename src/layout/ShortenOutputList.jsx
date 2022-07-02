import React from 'react'
import ShortenOutput from './ShortenOutput'

function ShortenOutputList({ output }) {

  return (
    <div className='shorten-list'>
      {output.map((item) => (
          <ShortenOutput key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ShortenOutputList
