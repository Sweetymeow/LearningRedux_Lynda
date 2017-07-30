import expect from 'expect' // show store data before and after dispatch
import storeFactory from './store' // show store data before and after dispatch
import { addError, 
         clearError, 
         changeSuggestions, 
         clearSuggestions 
} from './actions'  // addDay, removeDay, setGoal 
// import initialState from './initialState'

const store = storeFactory() //const store = storeFactory(initialState)

const state = store.getState()

console.log('Initial State: ', state) 

//store.subscribe(saveState)
/*
store.dispatch(addDay("Heavenly", "2016-12-22"))
store.dispatch(removeDay("2016-12-22"))
store.dispatch(setGoal(55))
*/

expect(store.getState().errors).toEqual(["something went wrong"])

console.log(`
    addError() Action Creator Works!!
`)

/* {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-11-28",
        "powder": true,
        "backcountry": true
    }
} */