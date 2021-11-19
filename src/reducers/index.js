import { combineReducers } from 'redux'
import teams from './teams'
import rounds from './rounds'
import answers from './answers'
import game from './game'

const appReducer = combineReducers({
    teams,
    rounds,
    answers,
    game
})

const rootReducer = (state, action) => {
    if (action.type === 'set-state')
        return appReducer(action.payload, action)
    return appReducer(state, action)
}

export default rootReducer
