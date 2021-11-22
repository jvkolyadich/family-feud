import React from 'react'

const LeftMiniScreen = ({ children }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '19.9%',
                height: '20.5%',
                top: '50.1%',
                left: '10.79%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            { children }
        </div>
    )
}

export default LeftMiniScreen
