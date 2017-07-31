import storeFactory from './store' // show store data before and after dispatch
import { randomGoals  } from './actions' 

const store = storeFactory() 
console.log('Initial State: ', store.getState()) 

store.dispatch( randomGoals() )

//store.subscribe(saveState)
//
//store.dispatch( addError("something went wrong") )
//
//expect(store.getState().errors).toEqual(["something went wrong"])
//
//console.log(`
//    error: ${JSON.stringify(store.getState().errors)}
//    addError() Action Creator Works!!
//`)

