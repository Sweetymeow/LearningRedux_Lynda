import C from './constants'

export const addDay = (resort, date, powder = false, backgrountry = false) => {
    return {
        type: C.ADD_DAY,
        payload: { resort, date, powder, backgrountry }
    }
}

export const removeDay = (date) => {
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => {
    return {
        type: C.SET_GOAL,
        payload: goal
    }
}

/*--------- Chapter 4-2 Action Creator --------------*/
export const addError = (error) => ({
        type: C.ADD_ERROR,
        payload: error
    })

export const clearError = (index) => {
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const changeSuggestions = ( nexSuggestions = [] ) => {
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: nexSuggestions
    }
}

export const clearSuggestions = () => {
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: []
    }
}

