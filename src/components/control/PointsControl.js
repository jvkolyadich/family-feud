import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConfirmButton from '../form/ConfirmButton'

const PointsControl = ({ disabled }) => {
    const dispatch = useDispatch()
    const answers = useSelector(state => state.answers.answers)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const pendingPoints = useSelector(state => state.game.pendingPoints)
    const currentTeamId = useSelector(state => state.game.currentTeamId)
    const [addedPoints, setAddedPoints] = useState(false)
    useEffect(() => {
        if (!addedPoints) {
            const newPendingPoints = answers.filter(
                answer => answer.roundId === currentRoundId && answer.isRevealed
            ).reduce((sum, currentAns) => (sum + currentAns.points), 0)
            dispatch({
                type: 'game/set-pending-points',
                payload: newPendingPoints
            })
        }
    }, [currentRoundId, answers])
    useEffect(() => setAddedPoints(false), [currentRoundId])
    return (
        <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <ConfirmButton
                className='btn btn-danger w-100 me-3'
                disabled={disabled || !currentTeamId}
                onClick={() => dispatch({
                    type: 'teams/subtract-points',
                    payload: {
                        id: currentTeamId,
                        points: pendingPoints
                    }
                })}
            >
                Subtract points
            </ConfirmButton>
            <input
                type='text'
                disabled={disabled}
                style={{ width: '10rem' }}
                className='form-control p-3 fs-4 text-center'
                value={pendingPoints}
                onChange={e => {
                    const value = Number(e.target.value)
                    if (!isNaN(value) || (value < 0))
                        dispatch({
                            type: 'game/set-pending-points',
                            payload: value
                        })
                }}
            />
            <button
                className='btn btn-primary w-100 ms-3'
                disabled={disabled || !currentTeamId}
                onClick={() => {
                    dispatch({
                        type: 'teams/add-points',
                        payload: {
                            id: currentTeamId,
                            points: pendingPoints
                        }
                    })
                    dispatch({
                        type: 'game/set-pending-points',
                        payload: 0
                    })
                    setAddedPoints(true)
                }}
            >
                Add points
            </button>
        </div>
    )
}

export default PointsControl
