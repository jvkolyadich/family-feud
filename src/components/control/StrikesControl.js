import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import strikeSfx from '../../assets/strike.mp3'

const StrikesControl = ({ disabled }) => {
    const dispatch = useDispatch()
    const teams = useSelector(state => state.teams.teams)
    const currentTeamId = useSelector(state => state.game.currentTeamId)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const [playStrike] = useSound(strikeSfx, {
        volume: 0.25, interrupt: true
    })
    useEffect(() => {
        dispatch({
            type: 'teams/reset-all-strikes'
        })
    }, [currentRoundId])
    return (
        <div
            className='mt-3 w-100 d-flex flex-column'
        >
            <button
                className='w-100 btn btn-primary'
                disabled={disabled || !currentTeamId || (teams.find(team => team.id === currentTeamId).strikes === 3)}
                onClick={() => {
                    playStrike()
                    dispatch({
                        type: 'teams/add-strike',
                        payload: currentTeamId
                    })
                }}
            >
                Add strike
            </button>
            <button
                className='mt-2 w-100 btn btn-primary'
                disabled={disabled || !currentTeamId}
                onClick={() => dispatch({
                    type: 'teams/reset-strikes',
                    payload: currentTeamId
                })}
            >
                Reset strikes
            </button>
        </div>
    )
}

export default StrikesControl
