import C from '../constants'
import appReducer from './reducers' // get Default from combineReducers()
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
    let result
    
    /*----- Before dispatch action ------*/
    console.groupCollapsed(`dispatching action => ${ action.type }`)
    console.log('BEFORE Dispatch - #ski days: ', store.getState().allSkiDays.length)
    
    result = next(action) // action get dispatch and state change
    
    /*----- After dispatch action ------*/
    let { allSkiDays, goal, errors, resortNames } = store.getState()
    
    console.log(`
        AFTER Dispatch 
        ===============================
        ski days: ${ allSkiDays.length}
        goal: ${ goal}
        fetching: ${ resortNames.fetching}
        suggestions: ${ resortNames.suggestions }
        errors: ${ errors.length}
    `)
    
    console.groupEnd()
    
    return result // state change regist
}

export default ( initialState = {} ) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
    // return createStore(appReducer, initialState)
}