import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const LoadSaveButtons = ({ className }) => {
    const fileInputRef = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    return (
        <div
            className={
                'd-flex justify-content-center align-items-center w-100' +
                (className ? (' ' + className) : '')
            }
        >
            <button
                className='btn btn-primary w-100 me-2'
                onClick={() => {
                    fileInputRef.current.click()
                }}
            >
                Load game
            </button>
            <button
                className='btn btn-primary w-100'
                onClick={() => {
                    const link = document.createElement('a')
                    link.download = 'family_feud_game.json'
                    link.href = 'data:text/json;charset=utf-8,'
                                + encodeURIComponent(JSON.stringify(state))
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }}
            >
                Save game
            </button>
            <input
                style={{ display: 'none' }}
                ref={fileInputRef}
                type='file'
                accept='.json'
                onChange={e => {
                    const reader = new FileReader()
                    reader.onload = e => dispatch({
                        type: 'set-state',
                        payload: JSON.parse(e.target.result)
                    })
                    reader.readAsText(e.target.files[0])
                    fileInputRef.current.value = ''
                }}
            />
        </div>
    )
}

export default LoadSaveButtons
