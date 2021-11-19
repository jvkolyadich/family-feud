import React from 'react'

const TopMiniScreen = ({ children, style }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '16.5%',
                height: '15%',
                top: '14.5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'Impact, sans-serif',
                fontSize: '400%',
                textAlign: 'center',
                textShadow: '-1px -1px 0 #000,' +
                            '1px -1px 0 #000,' +
                            '-1px 1px 0 #000,' +
                            '1px 1px 0 #000',
                ...style
            }}
        >
            { children }
        </div>
    )
}

export default TopMiniScreen
