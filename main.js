import "./style.css"
import { legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { budgetReducer } from "./reducers/budgetReducer"
import { ADD, SUBTRACT, POWER } from "./actions/budget"

const store = createStore(budgetReducer, composeWithDevTools())

const { getState, dispatch, subscribe } = store

const actionLegend = {
    "add": ADD,
    "subtract": SUBTRACT,
    "power": POWER
}

//! Global DOM Nodes
const form = document.querySelector("#form")
const budgetSpan = document.querySelector("#budget")
const budgetQuantity = document.querySelector("#quantity")
const budgetAction = document.querySelector("#action-dropdown")

//! Callbacks
const displayBudget = () => {
    budgetSpan.innerText = getState().budget
}

const handleSubmit = (e) => {
    e.preventDefault()

    const budgetValue = Number(budgetQuantity.value)
    const action = budgetAction.value

    if (typeof budgetValue !== "number" || budgetValue < 0) {
        alert("Budget has to be a positive number")
        return
    }

    if (!["add", "subtract", "power"].includes(action)) {
        alert("Add, subtract, power are the only actions allowed")
        return
    }

    const actionDispatcher = actionLegend[action]

    dispatch(actionDispatcher(budgetValue))

    e.target.reset()
}

//! Attach listeners
form.addEventListener("submit", handleSubmit)

//! Display current and future budget updates
displayBudget()

unsubscribe = subscribe(displayBudget)