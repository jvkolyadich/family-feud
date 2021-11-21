import React, { useEffect, useState } from 'react'
import { tab } from '../../tab'
import backgroundImg from '../../assets/background.png'

const backgroundAspectRatio = 1240 / 930

const Background = ({ children }) => {
    const [isHorizontal, setIsHorizontal] = useState(
        tab.innerWidth / tab.innerHeight >= backgroundAspectRatio
    )
    useEffect(() => {
        const handleResize = e => {
            setIsHorizontal(
                e.target.innerWidth / e.target.innerHeight >= backgroundAspectRatio
            )
        }
        tab.addEventListener('resize', handleResize)
        return () => {
            tab.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <img
                src={backgroundImg}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    [isHorizontal ? 'width' : 'height']: '100%'
                }}
            />
            { children }
        </div>
    )
}

export default Background
