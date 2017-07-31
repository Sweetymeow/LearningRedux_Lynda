import expect from 'expect' // to compare the value
import storeFactory from './store' // show store data before and after dispatch
import { addError, clearError, changeSuggestions, clearSuggestions  } from './actions' 
// import initialState from './initialState'

const store = storeFactory() 
//const store = storeFactory(initialState)

const state = store.getState()

console.log('Initial State: ', state) 

//store.subscribe(saveState)

store.dispatch( addError("something went wrong") )
expect(store.getState().errors).toEqual(["something went wrong"])
console.log(`
    error: ${JSON.stringify(store.getState().errors)}
    addError() Action Creator Works!!
`)


store.dispatch( clearError(0) ) // errorMessage index
expect(store.getState().errors).toEqual([])
console.log(`
    clearError() Action Creator Works!!
`)


store.dispatch( changeSuggestions(["One", "Two", "Three"]) ) 
expect(store.getState().resortNames.suggestions).toEqual(["One", "Two", "Three"])
console.log(`
    changeSuggestions() Action Creator Works!!
`)

store.dispatch( clearSuggestions() ) 
expect(store.getState().resortNames.suggestions).toEqual([])
console.log(`
    clearSuggestions() Action Creator Works!!
`)


