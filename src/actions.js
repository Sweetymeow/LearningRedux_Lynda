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

export const addError = () => {
    return {
        type: C.ADD_ERROR,
        payload: goal
    }
}

export const clearError = () => {
    return {
        type: C.CLEAR_ERROR,
        payload: goal
    }
}

export const changeSuggestions = () => {
    return {
        type: C.CHANGE_SUGGESTIONS
        payload: goal
    }
}

export const clearSuggestions = () => {
    return {
        type: C.CLEAR_SUGGESTIONS
        payload: goal
    }
}

