import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TeamSelector = ({ disabled }) => {
    const dispatch = useDispatch()
    const teams = useSelector(state => state.teams.teams)
    const currentTeamId = useSelector(state => state.game.currentTeamId)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const isInitialRender = useRef(true)
    useEffect(() => {
        if (!isInitialRender.current)
            dispatch({
                type: 'game/set-current-team-id',
                payload: ''
            })
        else
            isInitialRender.current = false
    }, [currentRoundId])
    return (
        <div
            className='mt-3 w-100 d-flex justify-content-around'
        >
            {teams.map((team, index) => (
                <div
                    key={team.id}
                    className={
                        `w-100 p-3 mb-0 text-center d-flex flex-column align-items-center${
                            index === 0
                            ? ' me-3'
                            : index === (teams.length - 1)
                            ? ' ms-3'
                            : 'mx-3'
                        }${
                            disabled
                            ? ' alert alert-secondary'
                            : team.id === currentTeamId
                            ? ' alert alert-primary border-primary'
                            : ' alert alert-light border-secondary'
                        }`
                    }
                    onClick={() => {
                        if (!disabled)
                            dispatch({
                                type: 'game/set-current-team-id',
                                payload: currentTeamId === team.id ? '' : team.id
                            })
                    }}
                >
                    <div className='fs-4'>Team {index + 1}</div>
                    <div className='fs-5'>Score: {team.score}</div>
                    <div className='fs-5'>Strikes: {team.strikes}</div>
                </div>
            ))}
        </div>
    )
}

export default TeamSelector
