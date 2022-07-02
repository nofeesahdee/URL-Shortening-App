import React from 'react'

function ShortenOutput({ item }) {
  return (
    <div className='shorten-output'>
      <div className='item-text'>{item.text}</div>
      <div className='copy-link'>
        <div className='shortlink'>{item.shortLink}</div>
        <button className='copy'>Copy</button>
      </div>
    </div>
  )
}

export default ShortenOutput
