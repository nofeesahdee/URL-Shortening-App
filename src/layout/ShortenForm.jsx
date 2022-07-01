import React from 'react'
// import ShortenContext from '../context/shortenContext'
import { useState,  useEffect } from 'react'

function ShortenForm() {
    const [ text, setText ] = useState('')
    const [ error, setError ] = useState('')
    const [ shortLink, setShortLink ] = useState('')
    
    // fetch data from the API
    useEffect(() => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        .then((response) => response.json())
        .then((data) => checkData(data))
    }, [text]);

    const checkData = (data) =>{
        if(data.ok){
            setShortLink(data.result.full_short_link)
        }
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            setError('Please add a link')
        }else if (text !== ''){
            setError('') 
        }
        const newOutput = {
            text,
            shortLink
        }
        console.log(newOutput)
        setText('')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input 
                    type="text" 
                    value={text}
                    onChange={handleTextChange}
                    placeholder='Shorten a link here...'
                />
                <button type='submit'>Shorten It!</button>
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
        <div>
            <div>{shortLink}</div>
        </div>
    </>
  )
}

export default ShortenForm
