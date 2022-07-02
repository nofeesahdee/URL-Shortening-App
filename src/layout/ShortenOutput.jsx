import React, { useState } from 'react'
import CopyButtton from './CopyButtton'

function ShortenOutput({ item }) {
  const [isCopied, setIsCopied] = useState(false)

  const copyText = () =>{
    let toCopy = (item.shortLink)
    console.log(toCopy)
    navigator.clipboard.writeText(toCopy);
    setIsCopied(true)
  }

  return (
    <div className='shorten-output'>
      <div className='item-text'>{item.text}</div>
      <div className='copy-link'>
        <div className='shortlink'>{item.shortLink}</div>
        {isCopied ? 
          <CopyButtton /> :
          <button className='copy' onClick={copyText}>Copy</button>
        }
      </div>
    </div>
  )
}

export default ShortenOutput
