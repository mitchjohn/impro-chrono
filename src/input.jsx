import React, {useState} from 'react'

const isNumber = n => !isNaN(parseFloat(n)) && !isNaN(n - 0);

const TIMER_REFRESH_DELAY = 1000

export const Input = () => {
    const [timer, setTimer] = useState(0)
    const [numberOfSeconds, setNumberOfSeconds] = useState(0)
    const [answerIsANumber, setAnswerIsANumber] = useState(false)
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [currentIntervalId, setCurrentIntervalId] = useState(0)

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
            setTimer(numberOfSeconds)

            const intervalId = setInterval(() => {
                setTimer((timer) => timer - 1)
            }, TIMER_REFRESH_DELAY)

            setCurrentIntervalId(intervalId)
        }
    }

    const stopTimer = () => {
        setIsTimerRunning(false)

        if (currentIntervalId > 0) {
            clearInterval(currentIntervalId)
        }
    }

    return <>
        {isTimerRunning && <p>Timer is running {timer} !!!</p>}
        <input onChange={onInputChange}></input>
        {!answerIsANumber && <p style={{color: 'red'}}>Votre valeur doit être un nombre</p>}
        <button disabled={isTimerRunning} onClick={startTimer}>Start</button>
        <button onClick={stopTimer} disabled={!isTimerRunning}>Stop</button>

    </>
}