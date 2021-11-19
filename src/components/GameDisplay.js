import React from 'react'
import { useSelector } from 'react-redux'
import StartingScreen from './display/StartingScreen'
import GameScreen from './display/GameScreen'
import EndingScreen from './display/EndingScreen'

const BlackScreen = () => (
    <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black'
        }}
    />
)

const GameDisplay = () => {
    const game = useSelector(state => state.game)
    return game.isBlackedOut ? (
        <BlackScreen />
    ) : (game.ending || game.ended) ? (
        <EndingScreen />
    ) : game.started ? (
        <GameScreen />
    ) : game.starting ? (
        <StartingScreen />
    ) : (
        <BlackScreen />
    )
}

export default GameDisplay
