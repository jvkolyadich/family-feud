const initialState = {
    teams: [
        {
            id: 1,
            score: 0,
            strikes: 0

        },
        {
            id: 2,
            score: 0,
            strikes: 0
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'teams/add-strike':
            return {
                ...state,
                teams: state.teams.map(team => {
                    if (team.id !== action.payload) return team
                    return {
                        ...team,
                        strikes: team.strikes + 1
                    }
                })
            }
        case 'teams/add-points':
            return {
                ...state,
                teams: state.teams.map(team => {
                    if (team.id !== action.payload.id) return team
                    return {
                        ...team,
                        score: team.score + action.payload.points
                    }
                })
            }
        case 'teams/subtract-points':
            return {
                ...state,
                teams: state.teams.map(team => {
                    if (team.id !== action.payload.id) return team
                    return {
                        ...team,
                        score: team.score - action.payload.points
                    }
                })
            }
        case 'teams/reset':
            return {
                ...state,
                teams: state.teams.map(team => {
                    return {
                        ...team,
                        score: 0,
                        strikes: 0
                    }
                })
            }
        case 'teams/reset-all-strikes':
            return {
                ...state,
                teams: state.teams.map(team => {
                    return {
                        ...team,
                        strikes: 0
                    }
                })
            }
        case 'teams/reset-strikes':
            return {
                ...state,
                teams: state.teams.map(team => {
                    if (team.id !== action.payload) return team
                    return {
                        ...team,
                        strikes: 0
                    }
                })
            }
        default:
            return state
    }
}

export default reducer
