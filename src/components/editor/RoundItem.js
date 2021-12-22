import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnswerItem from './AnswerItem'
import ConfirmButton from '../form/ConfirmButton'

const RoundItem = ({ round }) => {
    const dispatch = useDispatch()
    const answers = useSelector(state => state.answers.answers)
    const currentRoundId = useSelector(state => state.game.currentRoundId)
    const roundAnswers = answers.filter(answer => answer.roundId === round.id)
    return (
        <div
            key={round.id}
            className='card mt-1 mb-3 p-2'
        >
            <div className='w-100 text-center fs-5'>Round {round.index}</div>
            <label className='form-label mb-1'>Question</label>
            <input
                type='text'
                className='form-control'
                value={round.question}
                onChange={e => dispatch({
                    type: 'rounds/set-question',
                    payload: {
                        id: round.id,
                        question: e.target.value
                    }
                })}
            />
            {roundAnswers.map((answer, index) => (
                <AnswerItem key={answer.id} answer={answer} index={index} />
            ))}
            <div className='w-100 d-flex justify-content-between align-items-center mt-3'>
                <button
                    className='btn btn-primary me-2 w-100'
                    disabled={roundAnswers.length === 8}
                    onClick={() => dispatch({
                        type: 'answers/add',
                        payload: { roundId: round.id }
                    })}
                >
                    Add answer
                </button>
                <ConfirmButton
                    className='btn btn-danger text-nowrap'
                    disabled={round.id === currentRoundId}
                    onClick={() => {
                        dispatch({
                            type: 'answers/delete-from-round',
                            payload: round.id
                        })
                        dispatch({
                            type: 'rounds/delete',
                            payload: round.id
                        })
                    }}
                >
                    Delete round
                </ConfirmButton>
            </div>
        </div>
    )
}

export default RoundItem
