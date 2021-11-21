import React from 'react'

const RightMiniScreen = ({ children }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '19.9%',
                height: '20.5%',
                top: '50.1%',
                left: '89.17%',
                transform: 'translate(-50%, -50%)',
                fontSize: '300%',
                overflow: 'hidden',
                fontFamily: 'Impact, sans-serif',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textShadow: '-1px -1px 0 #000,' +
                            '1px -1px 0 #000,' +
                            '-1px 1px 0 #000,' +
                            '1px 1px 0 #000'
            }}
        >
            { children }
        </div>
    )
}

export default RightMiniScreen
