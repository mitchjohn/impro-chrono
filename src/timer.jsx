import React, {useEffect, useState} from "react";

const TIMER_REFRESH_DELAY = 1000

export const Timer = ({startTimer = 0}) => {
    const [timer, setTimer] = useState(startTimer)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((timer) => {
                return timer - 1
            })

        }, TIMER_REFRESH_DELAY)

        return () => clearInterval(intervalId)
    })

    return <span>{timer}</span>
}