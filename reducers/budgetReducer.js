export const initialState = {
    budget: 0,
    errors: [],
    status: "idle"
}

export const budgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "BUDGET/ADD":
            return {
                ...state,
                budget: state.budget + action.payload
            }
        case "BUDGET/SUBTRACT":
            return {
                ...state,
                budget: state.budget - action.payload
            }
        case "BUDGET/POWER":
            return {
                ...state,
                budget: state.budget ** action.payload
            }
    
        default:
            return state;
    }
}