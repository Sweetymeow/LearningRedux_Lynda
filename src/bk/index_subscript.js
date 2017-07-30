import C from './constants'
import appReducer from './store/reducers' // get Default from combineReducers()
import { createStore } from 'redux'

const initialState =  localStorage['local-redux'] ? 
      JSON.stringify( localStorage['local-redux']) : {}

// Invoke createStore to create 'store'
const store = createStore(appReducer)

store.subscribe( () => console.log(store.getState()))

store.subscribe( () => {
    const state = JSON.stringify( store.getState() )
    localStorage['local-redux'] = state;
})

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

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})