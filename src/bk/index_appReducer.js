import C from './constants'
import appReducer from './store/reducers' // get Default from combineReducers()
import initialState from './initialState.json'

let state = initialState

console.log(`
    Init State
    ==============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${JSON.stringify(state.resortNames.fetching)}
    suggestions: ${JSON.stringify(state.resortNames.suggestions)}
`)

state = appReducer(state, {
    type: C.SET_GOAL,
    payload: 2
})
    
state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Kirkwood",
        "date": "2016-11-11",
        "powder": false,
        "backcountry": true
    }
})

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ['Mt Tallac', 'Mt Hood', 'Mt Shata']
})

console.log(`
    Next State
    ==============
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${JSON.stringify(state.resortNames.fetching)}
    suggestions: ${JSON.stringify(state.resortNames.suggestions)}
`)

