import React, { useState } from 'react'

const ConfirmButton = ({ className, disabled, onClick, children }) => {
    const [confirming, setConfirming] = useState(false)
    return (
        <>
            <button
                className={className}
                disabled={disabled}
                onClick={() => setConfirming(true)}
            >
                { children }
            </button>
            {confirming && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 4
                    }}
                >
                    <div
                        className='card border-none w-75 d-flex flex-column align-items-center p-5'
                    >
                        <div className='fs-4 text-center'>Are you sure?</div>
                        <div
                            className='w-100 d-flex justify-content-center align-items-center mt-3'
                        >
                            <button
                                className='btn btn-primary w-100 me-2'
                                onClick={() => {
                                    setConfirming(false)
                                    onClick()
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className='btn btn-danger w-100'
                                onClick={() => setConfirming(false)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ConfirmButton
