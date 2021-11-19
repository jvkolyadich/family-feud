import React from 'react'

const CenterScreen = ({ children, style }) => {
    return (
        <div
            style={{
                position: 'absolute',
                width: '39%',
                height: '41.95%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                ...style
            }}
        >
            { children }
        </div>
    )
}

export default CenterScreen
