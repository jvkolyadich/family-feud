import uuid from '../util/uuid'

const initialState = {
    answers: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'answers/add':
            return {
                ...state,
                answers: [...state.answers, {
                    id: uuid(),
                    roundId: action.payload.roundId,
                    text: '',
                    points: 1,
                    isRevealed: false
                }]
            }
        case 'answers/delete':
            return {
                ...state,
                answers: state.answers.filter(answer => answer.id !== action.payload)
            }
        case 'answers/delete-from-round':
            return {
                ...state,
                answers: state.answers.filter(answer => answer.roundId !== action.payload)
            }
        case 'answers/set-text':
            return {
                ...state,
                answers: state.answers.map(answer => {
                    if (answer.id !== action.payload.id) return answer
                    return {
                        ...answer,
                        text: action.payload.text
                    }
                })
            }
        case 'answers/set-points':
            return {
                ...state,
                answers: state.answers.map(answer => {
                    if (answer.id !== action.payload.id) return answer
                    return {
                        ...answer,
                        points: action.payload.points
                    }
                })
            }
        case 'answers/set-is-revealed':
            return {
                ...state,
                answers: state.answers.map(answer => {
                    if (answer.id !== action.payload.id) return answer
                    return {
                        ...answer,
                        isRevealed: action.payload.isRevealed
                    }
                })
            }
        case 'answers/reset-round-is-revealed':
            return {
                ...state,
                answers: state.answers.map(answer => {
                    if (answer.roundId !== action.payload) return answer
                    return {
                        ...answer,
                        isRevealed: false
                    }
                })
            }
        case 'answers/reset-is-revealed':
            return {
                ...state,
                answers: state.answers.map(answer => ({
                    ...answer,
                    isRevealed: false
                }))
            }
        default:
            return state
    }
}

export default reducer
