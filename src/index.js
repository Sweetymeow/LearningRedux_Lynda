import C from './constants'
import storeFactory from './store' // get Default from combineReducers()
import initialState from './initialState'

//const initialState =  localStorage['local-redux'] ? JSON.stringify( localStorage['local-redux']) : {}

const saveState = () => {
    const state = JSON.stringify( store.getState() )
    localStorage['local-redux'] = state;
} // save current state to browser's localStorage

const store = storeFactory(initialState)

console.log(store.getState()) 

store.subscribe(saveState)

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-11-28",
        "powder": true,
        "backcountry": true
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Squaw Valley",
        "date": "2016-03-19",
        "powder": false,
        "backcountry": true
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "The Canyons",
        "date": "2017-01-03",
        "powder": true,
        "backcountry": false
    }
})
