import storeFactory from './store' // show store data before and after dispatch
import { addDay, removeDay, setGoal } from './actions' // get Default from combineReducers()
import initialState from './initialState'

//const store = storeFactory(initialState)
const store = storeFactory()

const state = store.getState()

console.log('Initial State: ', state) 

//store.subscribe(saveState)
store.dispatch(
    addDay("Heavenly", "2016-12-22")
)

store.dispatch(
    removeDay("2016-12-22")
)

store.dispatch(
    setGoal(55)
)

/* {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-11-28",
        "powder": true,
        "backcountry": true
    }
} */