const initialState = {
    started: false,
    starting: false,
    currentRoundId: '',
    ending: false,
    ended: false,
    isBlackedOut: false,
    isTabOpen: false,
    currentTeamId: '',
    pendingPoints: 0,
    isQuestionShowing: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'game/set-started':
            return {
                ...state,
                started: action.payload,
                starting: false
            }
        case 'game/set-starting':
            return {
                ...state,
                starting: action.payload
            }
        case 'game/set-current-round-id':
            return {
                ...state,
                currentRoundId: action.payload
            }
        case 'game/set-ending':
            return {
                ...state,
                ending: action.payload
            }
        case 'game/set-ended':
            return {
                ...state,
                ended: action.payload,
                ending: false
            }
        case 'game/set-is-blacked-out':
            return {
                ...state,
                isBlackedOut: action.payload
            }
        case 'game/set-is-tab-open':
            return {
                ...state,
                isTabOpen: action.payload
            }
        case 'game/set-current-team-id':
            return {
                ...state,
                currentTeamId: action.payload
            }
        case 'game/set-pending-points':
            return {
                ...state,
                pendingPoints: action.payload
            }
        case 'game/set-is-question-showing':
            return {
                ...state,
                isQuestionShowing: action.payload
            }
        case 'game/reset':
            return {
                ...initialState,
                isTabOpen: state.isTabOpen
            }
        default:
            return state
    }
}

export default reducer
