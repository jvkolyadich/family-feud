import React from 'react'
import { useSelector } from 'react-redux'
import StartingScreen from './display/StartingScreen'
import GameScreen from './display/GameScreen'
import EndingScreen from './display/EndingScreen'

const GameDisplay = () => {
    const game = useSelector(state => state.game)
    return (game.ending || game.ended) ? (
        <EndingScreen />
    ) : game.started ? (
        <GameScreen />
    ) : (
        <StartingScreen />
    )
}

export default GameDisplay
