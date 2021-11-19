import React from 'react'

const LeftMiniScreen = ({ children }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '20%',
                height: '20.4%',
                top: '50.1%',
                left: '10.7%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'Impact, sans-serif',
                fontSize: '300%',
                textAlign: 'center',
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

export default LeftMiniScreen
