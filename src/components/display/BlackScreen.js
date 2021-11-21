import React from 'react'
import { useSelector } from 'react-redux'

const BlackScreen = () => {
    const isBlackedOut = useSelector(state => state.game.isBlackedOut)
    return (
        <div
            style={{
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                opacity: isBlackedOut ? '100%' : '0%',
                transition: 'opacity 150ms ease-in-out'
            }}
        />
    )
}

export default BlackScreen
