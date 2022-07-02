import React from 'react'
import { useState,  useEffect } from 'react'
import Spinner from './Spinner'

function ShortenForm({ handleAdd }) {
    const [ text, setText ] = useState('')
    const [ error, setError ] = useState('')
    const [ shortLink, setShortLink ] = useState('')
    const [ isLoading, setIsLoading ] = useState(true)
                                       
    // fetch data from the API
    useEffect(() => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        .then((response) => response.json())
        .then((data) => checkData(data))
        setIsLoading(false)
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
        if(text === '' ){
            setError('Please add a link')
        }else if (text !== '' || shortLink !== ''){
            setError('') 
            const newOutput = {
                text,
                shortLink
            }
            handleAdd(newOutput)
            setText('')
        }
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
                {isLoading ?
                 <Spinner /> :
                 <button type='submit'>Shorten It!</button>
                }
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
    </>
  )
}

export default ShortenForm
