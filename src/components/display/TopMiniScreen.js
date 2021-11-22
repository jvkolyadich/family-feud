import React from 'react'

const TopMiniScreen = ({ children, style }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '16.9%',
                height: '15%',
                top: '14.5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...style
            }}
        >
            { children }
        </div>
    )
}

export default TopMiniScreen
