import {useState} from "react";

export const Score = ({initialScore = 0}) => {
    const [score, setScore] = useState(initialScore)

    const scoreChange = () => {
        setScore(score + 1)
    }

    return <>
        <button onClick={() => setScore(0)}>reset</button>
        <p onClick={scoreChange}>{score}</p>
    </>
}