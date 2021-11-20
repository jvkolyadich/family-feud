import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GameEditor from './components/GameEditor'
import GameControl from './components/GameControl'
import useSound from 'use-sound'
import questionSfx from './assets/question.mp3'
import themeSfx from './assets/theme.mp3'
import endingSfx from './assets/ending.mp3'
import { openTab, closeTab } from './tab'

const App = () => {
    const dispatch = useDispatch()
    const [mode, setMode] = useState('edit')
    const isTabOpen = useSelector(state => state.game.isTabOpen)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const gameStarting = useSelector(state => state.game.starting)
    const gameStarted = useSelector(state => state.game.started)
    const gameEnding = useSelector(state => state.game.ending)
    const gameEnded = useSelector(state => state.game.ended)
    const [playQuestion, { stop: stopQuestion }] = useSound(questionSfx, {
        volume: 0.25,
        interrupt: true,
        onend: () => {
            dispatch({
                type: 'game/set-is-question-showing',
                payload: false
            })
        }
    })
    const [playEnding, { stop: stopEnding }] = useSound(endingSfx, {
        volume: 0.25,
        interrupt: true,
        onend: () => {
            dispatch({
                type: 'game/set-ended',
                payload: true
            })
        }
    })
    const [playTheme, { stop: stopTheme }] = useSound(
        themeSfx, {
            volume: 0.25,
            interrupt: true
        }
    )
    useEffect(() => {
        if (gameStarting && isTabOpen) playTheme()
        return () => stopTheme()
    }, [gameStarting])
    useEffect(() => {
        if (gameEnding && isTabOpen) playEnding()
        return () => stopEnding()
    }, [gameEnding])
    useEffect(() => {
        if (gameStarted && isTabOpen && !gameEnding && !gameEnded) {
            playQuestion()
            dispatch({
                type: 'game/set-is-question-showing',
                payload: true
            })
        }
        return () => stopQuestion()
    }, [currentRoundId, gameStarted])
    useEffect(() => {
        if (isTabOpen) {
            const tab = openTab()
            tab.addEventListener('unload', () => {
                dispatch({
                    type: 'game/set-is-tab-open',
                    payload: false
                })
            })
        } else {
            closeTab()
            stopTheme()
            stopQuestion()
            stopEnding()
        }
    }, [isTabOpen])
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            }}
        >
            <div className='card-header'>
                <ul className='nav nav-tabs card-header-tabs'>
                    <li className='nav-item w-50'>
                        <div
                            className={'nav-link fs-5 text-center' + (
                                mode === 'edit'
                                ? ' active' : ''
                            )}
                            onClick={() => setMode('edit')}
                        >
                            Edit
                        </div>
                    </li>
                    <li className='nav-item w-50'>
                        <div
                            className={'nav-link fs-5 text-center' + (
                                mode === 'control'
                                ? ' active' : ''
                            )}
                            onClick={() => setMode('control')}
                        >
                            Play
                        </div>
                    </li>
                </ul>
            </div>
            <div className='card-body'>
                {mode === 'edit' && <GameEditor />}
                {mode === 'control' && <GameControl />}
            </div>
        </div>
    )
}

export default App
