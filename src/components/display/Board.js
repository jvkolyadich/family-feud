import React, { useEffect, useState } from 'react'
import { tab } from '../../tab'
import boardImg from '../../assets/board.png'

const boardAspectRatio = 1412 / 841

const Board = ({ children }) => {
    const [isHorizontal, setIsHorizontal] = useState(
        tab.innerWidth / tab.innerHeight >= boardAspectRatio
    )
    useEffect(() => {
        const handleResize = e => {
            const newIsHorizontal = e.target.innerWidth / e.target.innerHeight >= boardAspectRatio
            setIsHorizontal(newIsHorizontal)
        }
        tab.addEventListener('resize', handleResize)
        return () => {
            tab.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                position: 'relative',
                backgroundImage: `url(${boardImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: isHorizontal ? `calc(100vh * ${boardAspectRatio})` : '100vw',
                height: isHorizontal ? '100vh' : `calc(100vw / ${boardAspectRatio})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            { children }
        </div>
    )
}

export default Board
