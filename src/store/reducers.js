import C from './constants'

export const goal(state = 10, action) => { // satet default value is 10
    if(action.type === C.SET_GOAL){
        return parseInt(action.payload)
    }else{
        return state
    }
} // Goal function unchangable, need to used by index.js