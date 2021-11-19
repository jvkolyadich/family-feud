import React from 'react'
import { useDispatch } from 'react-redux'
import ConfirmButton from '../form/ConfirmButton'

const AnswerItem = ({ answer, index }) => {
    const dispatch = useDispatch()
    return (
        <div
            key={answer.id}
            className='my-2 w-100 d-flex justify-content-between align-items-end'
        >
            <div className='w-100 me-2'>
                <label className='form-label mb-1'>Answer {index + 1}</label>
                <input
                    type='text'
                    className='form-control'
                    value={answer.text}
                    onChange={e => dispatch({
                        type: 'answers/set-text',
                        payload: {
                            id: answer.id,
                            text: e.target.value
                        }
                    })}
                />
            </div>
            <div className='me-2'>
                <label className='form-label mb-1'>Points</label>
                <input
                    type='number'
                    className='form-control'
                    min={1}
                    max={99}
                    value={answer.points}
                    onChange={e => dispatch({
                        type: 'answers/set-points',
                        payload: {
                            id: answer.id,
                            points: Number(e.target.value)
                        }
                    })}
                />
            </div>
            <ConfirmButton
                className='btn btn-danger'
                onClick={() => dispatch({
                    type: 'answers/delete',
                    payload: answer.id
                })}
            >
                Delete
            </ConfirmButton>
        </div>
    )
}

export default AnswerItem
