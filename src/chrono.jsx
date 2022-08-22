import React, {useState} from 'react'
import {Timer} from "./timer";

const isNumber = n => !isNaN(parseFloat(n)) && !isNaN(n - 0);


export const Chrono = () => {
    const [numberOfSeconds, setNumberOfSeconds] = useState(0)
    const [answerIsANumber, setAnswerIsANumber] = useState(false)
    const [isTimerRunning, setIsTimerRunning] = useState(false)

    console.log(numberOfSeconds);

    const onInputChange = (event) => {
        const value = event.target.value

        if (!isNumber(value)) {
            setAnswerIsANumber(false)
        } else {
            setAnswerIsANumber(true)
            setNumberOfSeconds(value)
        }
    }

    const startTimer = () => {
        if (numberOfSeconds > 0) {
            setIsTimerRunning(true)
        }
    }

    const stopTimer = () => {
        setIsTimerRunning(false)
    }

    return <>
        {isTimerRunning && <p>Timer is running <Timer startTimer={numberOfSeconds}/> !!!</p>}
        <input onChange={onInputChange}></input>
        {!answerIsANumber && <p style={{color: 'red'}}>Votre valeur doit être un nombre</p>}
        <button disabled={isTimerRunning} onClick={startTimer}>Start</button>
        <button onClick={stopTimer} disabled={!isTimerRunning}>Stop</button>
    </>
}