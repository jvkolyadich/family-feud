import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RoundSelector = ({ disabled }) => {
    const dispatch = useDispatch()
    const rounds = useSelector(state => state.rounds.rounds)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    return (
        <div className='w-100 mt-3 d-flex flex-column'>
            <label className='form-label mb-1'>Round</label>
            <select
                className='line-select form-select'
                disabled={disabled}
                value={currentRoundId}
                onChange={e => dispatch({
                    type: 'game/set-current-round-id',
                    payload: e.target.value
                })}
            >
                <option value='' hidden>None</option>
                {rounds.map(round => (
                    <option key={round.id} value={round.id}>Round {round.index}: {round.question}</option>
                ))}
            </select>
            <div className='w-100 d-flex mt-2'>
                <button
                    className='btn btn-primary w-100 me-2'
                    disabled={
                        disabled ||
                        !rounds.length ||
                        !currentRoundId ||
                        (rounds.findIndex(round => round.id === currentRoundId) === 0)
                    }
                    onClick={() => {
                        const currentRoundIndex = rounds.findIndex(round => round.id === currentRoundId)
                        dispatch({
                            type: 'game/set-current-round-id',
                            payload: rounds[currentRoundIndex - 1].id
                        })
                    }}
                >
                    Previous round
                </button>
                <button
                    className='btn btn-primary w-100'
                    disabled={
                        disabled ||
                        (rounds.findIndex(round => round.id === currentRoundId) === (rounds.length - 1))
                    }
                    onClick={() => {
                        const currentRoundIndex = rounds.findIndex(round => round.id === currentRoundId)
                        dispatch({
                            type: 'game/set-current-round-id',
                            payload: rounds[currentRoundIndex + 1].id
                        })
                    }}
                >
                    Next round
                </button>
            </div>
        </div>
    )
}

export default RoundSelector
