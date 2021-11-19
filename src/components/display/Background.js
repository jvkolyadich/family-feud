import React from 'react'
import backgroundImg from '../../assets/background.png'

const Background = ({ children }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            { children }
        </div>
    )
}

export default Background
