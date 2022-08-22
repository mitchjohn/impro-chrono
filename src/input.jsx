import React, {useState} from 'react'

const isNumber = n => !isNaN(parseFloat(n)) && !isNaN(n - 0);

export const Input = () => {
    const [counter, setCounter] = useState(0)
    const [numberOfSeconds, setNumberOfSeconds] = useState(0)
    const [isNotANumber, setIsNotANumber] = useState(false)

    console.log(numberOfSeconds);

    const onInputChange = (event) => {
        const value = event.target.value

        if (!isNumber(value)) {
            setIsNotANumber(true)
        } else {
            setIsNotANumber(false)
            setNumberOfSeconds(value)
        }
    }

    const startTimer = () => {

    }

    return <>
        {numberOfSeconds > 0 && <p>Timer: {numberOfSeconds}</p>}
        <input onChange={onInputChange}></input>
        {isNotANumber && <p style={{color: 'red'}}>Votre valeur doit être un nombre</p>}
        <button onClick={startTimer}>Start</button>
        <button onClick={() => console.log('stop')}>Stop</button>
    </>
}