import uuid from '../util/uuid'

const initialState = {
    rounds: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'rounds/add':
            return {
                ...state,
                rounds: [...state.rounds, {
                    id: uuid(),
                    question: ''
                }].map((round, index) => {
                    round.index = index + 1
                    return round
                })
            }
        case 'rounds/delete':
            return {
                ...state,
                rounds: state.rounds
                        .filter(round => round.id !== action.payload)
                        .map((round, index) => {
                            round.index = index + 1
                            return round
                        })
            }
        case 'rounds/set-question':
            return {
                ...state,
                rounds: state.rounds.map(round => {
                    if (round.id !== action.payload.id) return round
                    return {
                        ...round,
                        question: action.payload.question
                    }
                })
            }
        default:
            return state
    }
}

export default reducer
