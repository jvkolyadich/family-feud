import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import duplicateSfx from '../../assets/duplicate.mp3'
import AnswerControl from './AnswerControl'

const RoundControl = ({ disabled }) => {
    const dispatch = useDispatch()
    const rounds = useSelector(state => state.rounds.rounds)
    const answers = useSelector(state => state.answers.answers)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const [currentRound, setCurrentRound] = useState([])
    const [currentAnswers, setCurrentAnswers] = useState([])
    const [playDuplicate] = useSound(duplicateSfx, { volume: 0.25 })
    useEffect(() => {
        const currentRoundAnswers = answers.filter(answer => answer.roundId === currentRoundId)
                                           .sort((a, b) => b.points - a.points)
        setCurrentAnswers(currentRoundAnswers)
        setCurrentRound(rounds.find(round => round.id === currentRoundId))
    }, [currentRoundId, answers])
    return (
        <div className='mt-3 d-flex flex-column'>
            <div className='w-100 px-5 fs-4 text-center'>{currentRound.question}</div>
            <div
                className='w-100'
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    gridTemplateRows: 'repeat(4, 25%)',
                    gridTemplateColumns: 'repeat(2, 50%)'
                }}
            >
                {currentAnswers.map((answer, index) => (
                    <AnswerControl
                        disabled={disabled}
                        answer={answer}
                        index={index}
                    />
                ))}
            </div>
            <div className='w-100 d-flex flex-column mt-2'>
                <button
                    disabled={disabled}
                    className='w-100 btn btn-primary mb-2'
                    onClick={playDuplicate}
                >
                    Play duplicate sound
                </button>
                <button
                    disabled={disabled}
                    className='w-100 btn btn-primary'
                    onClick={() => dispatch({
                        type: 'answers/reset-round-is-revealed',
                        payload: currentRoundId
                    })}
                >
                    Hide all
                </button>
            </div>
        </div>
    )
}

export default RoundControl
