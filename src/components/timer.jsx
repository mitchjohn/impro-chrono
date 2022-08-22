import React, {useEffect, useState} from "react";

const TIMER_REFRESH_DELAY = 1000

export const Timer = ({startTimer = 0, timerReachedZero}) => {
    const [timer, setTimer] = useState(startTimer)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer - 1 <= 0) {
                return timerReachedZero()
            }

            setTimer((timer) => timer - 1)
        }, TIMER_REFRESH_DELAY)

        return () => clearInterval(intervalId)
    })

    return <span>{timer}</span>
}