import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ConfirmButton from './form/ConfirmButton'
import PointsControl from './control/PointsControl'
import QuestionControl from './control/QuestionControl'
import RoundControl from './control/RoundControl'
import RoundSelector from './control/RoundSelector'
import StrikesControl from './control/StrikesControl'
import TeamSelector from './control/TeamSelector'

const GameControl = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.game)
    return (
        <div>
            <div
                className='d-flex w-100 justify-content-between align-items-center'
            >
                {game.isTabOpen ? (
                    <ConfirmButton
                        className='btn btn-danger me-2 w-100'
                        onClick={() => dispatch({
                            type: 'game/set-is-tab-open',
                            payload: false
                        })}
                    >
                        Close game display
                    </ConfirmButton>
                ) : (
                    <button
                        className='btn btn-primary me-2 w-100'
                        onClick={() => dispatch({
                            type: 'game/set-is-tab-open',
                            payload: true
                        })}
                    >
                        Open game display
                    </button>
                )}
                <button
                    className='btn btn-primary w-100'
                    disabled={!game.isTabOpen}
                    onClick={() => dispatch({
                        type: 'game/set-is-blacked-out',
                        payload: !game.isBlackedOut
                    })}
                >
                    {game.isBlackedOut ? 'Unblank' : 'Blank'} game display
                </button>
            </div>
            <div className='w-100'>
                {(!game.started && !game.starting) ? (
                    <>
                        <RoundSelector />
                        <button
                            className='btn btn-primary w-100 mt-3'
                            disabled={!game.currentRoundId || !game.isTabOpen}
                            onClick={() => dispatch({
                                type: 'game/set-starting',
                                payload: true
                            })}
                        >
                            Play intro
                        </button>
                        <button
                            className='btn btn-primary mt-3 w-100'
                            disabled={!game.currentRoundId || !game.isTabOpen}
                            onClick={() => dispatch({
                                type: 'game/set-started',
                                payload: true
                            })}
                        >
                            Start game
                        </button>
                    </>
                ) : game.ending ? (
                    <button
                        className='btn btn-primary mt-3 w-100'
                        disabled={!game.isTabOpen}
                        onClick={() => dispatch({
                            type: 'game/set-ended',
                            payload: true
                        })}
                    >
                        Skip outro music
                    </button>
                ) : game.starting ? (
                    <button
                        className='btn btn-primary mt-3 w-100'
                        disabled={!game.isTabOpen}
                        onClick={() => dispatch({
                            type: 'game/set-started',
                            payload: true
                        })}
                    >
                        Start game
                    </button>
                ) : (game.started && !game.ended) && (
                    <>
                        <QuestionControl disabled={!game.isTabOpen} />
                        <TeamSelector disabled={!game.isTabOpen} />
                        <StrikesControl disabled={!game.isTabOpen} />
                        <RoundControl disabled={!game.isTabOpen} />
                        <PointsControl disabled={!game.isTabOpen} />
                        <RoundSelector disabled={!game.isTabOpen} />
                        <ConfirmButton
                            className='btn btn-danger mt-3 w-100'
                            disabled={!game.isTabOpen}
                            onClick={() => dispatch({
                                type: 'game/set-ending',
                                payload: true
                            })}
                        >
                            End game
                        </ConfirmButton>
                    </>
                )}
                <ConfirmButton
                    className='btn btn-danger mt-3 w-100'
                    disabled={!game.started && !game.starting}
                    onClick={() => {
                        dispatch({ type: 'answers/reset-is-revealed' })
                        dispatch({ type: 'teams/reset' })
                        dispatch({ type: 'game/reset' })
                    }}
                >
                    Restart game
                </ConfirmButton>
            </div>
        </div>
    )
}

export default GameControl
