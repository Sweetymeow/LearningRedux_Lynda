import C from './constants'
import appReducer from './store/reducers' // get Default from combineReducers()
import initialState from './initialState.json'
import { createStore } from 'redux'

// Invoke createStore to create 'store'
const store = createStore(appReducer, initialState)

// Log the initial state
console.log('initial state', store.getState())

// Dispatch some action - to change/mutate the state
store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-19",
        "powder": false,
        "backcountry": true
    }
})

// Log the next state - look the current state
console.log('next state', store.getState())
