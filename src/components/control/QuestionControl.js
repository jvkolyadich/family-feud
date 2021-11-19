import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const QuestionControl = ({ disabled }) => {
    const dispatch = useDispatch()
    const isQuestionShowing = useSelector(state => state.game.isQuestionShowing)
    return (
        <button
            className='btn btn-primary mt-3 w-100'
            disabled={disabled}
            onClick={() => dispatch({
                type: 'game/set-is-question-showing',
                payload: !isQuestionShowing
            })}
        >
            {isQuestionShowing ? 'Hide' : 'Show'} question
        </button>
    )
}

export default QuestionControl
