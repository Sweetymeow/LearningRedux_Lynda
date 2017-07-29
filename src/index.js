import C from './constants'
import appReducer from './store/reducers' // get Default from combineReducers()
import { createStore } from 'redux'

// Invoke createStore to create 'store'
const store = createStore(appReducer)

const unsubscribeGoalLogger = store.subscribe( 
    () => console.log(` Goal : ${ store.getState().goal }`)
)

setInterval(() => {
    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random() * 10 )
    })
}, 250)

setTimeout(() => {
    unsubscribeGoalLogger();
}, 3000)