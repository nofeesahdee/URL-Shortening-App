import React from 'react'

function ShortenOutputList({ output }) {

  return (
    <div className='shorten-list'>
        {output.map((item) => {
            <div className='shorten-output'>
                <div>{item.text}</div>
                <div>{item.shortLink}</div>
            </div>
        })}
    </div>
  )
}

export default ShortenOutputList
