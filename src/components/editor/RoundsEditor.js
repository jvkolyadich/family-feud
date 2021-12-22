import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RoundItem from './RoundItem'

const RoundsEditor = ({ className }) => {
    const dispatch = useDispatch()
    const rounds = useSelector(state => state.rounds.rounds)
    return (
        <div className={className}>
            <div className='fs-4 mb-1'>Rounds</div>
            {rounds.map(round => (
                <RoundItem key={round.id} round={round} />
            ))}
            <button
                className='btn btn-primary w-100'
                onClick={() => dispatch({ type: 'rounds/add' })}
            >
                Add round
            </button>
        </div>
    )
}

export default RoundsEditor
