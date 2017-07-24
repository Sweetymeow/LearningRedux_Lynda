import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [{
        "resort": "Kirkwood",
        "date": "2016-11-11",
        "powder": false,
        "backcountry": true
}, {
        "resort": "Boreal",
        "date": "2016-10-09",
        "powder": true,
        "backcountry": false
}] // use *const* to stop change of 'state'

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Kirkwood",
        "date": "2016-11-11",
        "powder": false,
        "backcountry": false
    }
}

const removeAction = {
    type: C.REMOVE_DAY,
    payload: "2016-10-09"
}

const nextState = allSkiDays(state, removeAction)
//const nextState = allSkiDays(state, action)

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)