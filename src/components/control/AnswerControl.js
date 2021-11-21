import React from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import revealSfx from '../../assets/reveal.mp3'

const AnswerControl = ({ disabled, answer, index }) => {
    const dispatch = useDispatch()
    const [playReveal] = useSound(revealSfx, { volume: 0.25 })
    const row = index <= 3 ? index + 1 : index - 3
    const column = index <= 3 ? 1 : 2
    return (
        <div
            key={index}
            className='d-flex w-100 justify-content-between p-1'
            style={{
                gridArea: `${row}/${column}/${row}/${column}`,
                justifySelf: 'center'
            }}
        >
            <div
                className='card w-100 p-1 d-flex flex-column align-items-center'
                style={{ position: 'relative', overflow: 'hidden' }}
            >
                <div
                    className='fs-5 fw-bold d-flex text-nowrap mb-1 mx-1'
                    style={{ maxWidth: '100%', height: '1.875rem' }}
                >
                    {answer.text}
                </div>
                <div
                    className='fs-5'
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        padding: '0.25rem',
                        borderRadius: '0.25rem',
                        backgroundColor: 'white'
                    }}
                >
                    {answer.points}
                </div>
                <button
                    className={`btn btn-sm w-100 btn-${answer.isRevealed ? 'secondary' : 'primary'}`}
                    disabled={disabled || !answer.text}
                    onClick={() => {
                        if (!answer.isRevealed) playReveal()
                        dispatch({
                            type: 'answers/set-is-revealed',
                            payload: {
                                id: answer.id,
                                isRevealed: !answer.isRevealed
                            }
                        })
                    }}
                >
                    {answer.isRevealed ? 'Hide' : 'Reveal'}
                </button>
            </div>
        </div>
    )
}

export default AnswerControl
