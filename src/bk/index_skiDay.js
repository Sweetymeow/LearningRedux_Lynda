import C from './constants'
import { skiDay } from './store/reducers'

const state = null // use *const* to stop change of 'state'

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-22",
        "powder": true,
        "backcountry": false
    }
}

const nextState = skiDay(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)