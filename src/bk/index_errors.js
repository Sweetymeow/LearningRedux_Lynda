import C from './constants'
//import { skiDay } from './store/reducers'
import { errors } from './store/reducers'

const state = [
    "User not authorized",
    "Sever feed not found" 
] // use *const* to stop change of 'state'

const action = {
    type: C.ADD_ERROR,
    payload: "can't connect to server"
}
const clearAction = {
    type: C.CLEAR_ERROR,
    payload: 0
}

//const nextState = errors(state, action)
const nextState = errors(state, clearAction)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)