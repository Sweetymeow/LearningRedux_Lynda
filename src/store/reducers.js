import C from '../constants'
/*---------- Chapter 2-6 ----------*/
export const fetching = ( state = false, action) =>{
    switch(action.type){
       case C.FETCH_RESORT_NAMES:
            return true
            break;
        case C.CANCEL_FETCHING:
            return false
            break;
        case C.CHANGE_SUGGESTIONS:
            return false
            break;
        default:
            return state;      
    }
}

export const suggestions = ( state = [], action ) =>{
    switch(action.type){
       case C.CLEAR_SUGGESTIONS:
            return []
            break;
        case C.CHANGE_SUGGESTIONS:
            return action.payload
            break;
        default:
            return state;      
    }
}


/*---------- Chapter 2-1 to Chapter 2-5 ----------*/
// satet default value is 10
export const goal = (state = 10, action) => 
    (action.type === C.SET_GOAL) ? parseInt(action.payload) : state
    // goal(state, action) function unchangable, need to used by index.js

// Skiday Reducer
export const skiDay = (state = null, action) => 
    (action.type === C.ADD_DAY) ? action.payload : state
// Return SkiDay {"resort", "date", "powder", "backcountry"}       

export const errors = (state = [], action) => {
    switch(action.type){
        case C.ADD_ERROR:
            return [...state, action.payload] 
            // Qual to "state.concat(action.payload)"
            break;
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload) 
    // if the i! == index of messagen need to remove -> then return it and keep it in error list
            break;
        default:
            return state;    
    }
}

export const allSkiDays = ( state = [], action) =>{
    switch(action.type){
        case C.ADD_DAY:
            const hadDay = state.some( skiDay => skiDay.date === action.payload.date )
            return hadDay ? state : 
            [ 
                ...state, 
                skiDay(null, action) // or action.payload
            ].sort((a,b) => new Date(a.date) - new Date(b.date))
            //  use skiDay Reducer to get skiDay obj
            break;
        case C.REMOVE_DAY:
            return state.filter( skiDay => skiDay.date !== action.payload.date) // return - if date differant 
            break;
        default:
            return state;    
    }
} 