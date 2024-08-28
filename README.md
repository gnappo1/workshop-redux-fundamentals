# Redux Fundamentals in Vanilla JS

Welcome to the Redux Fundamentals lecture! In this session, we will explore the core concepts of Redux by building a simple budget management application using Vanilla JavaScript. We'll cover the essential parts of Redux, such as the store, actions, reducers, and how to dispatch actions and subscribe to store changes. We'll also take a look at how to integrate Redux DevTools using the traditional `createStore` function.

## Lecture Overview

### Objectives:
By the end of this lecture, you will:
- Understand the basic principles of Redux and how it manages application state.
- Learn how to create a Redux store from scratch using Vanilla JavaScript.
- Write and dispatch actions to modify the application state.
- Implement reducers to handle state changes based on dispatched actions.
- Subscribe to the store to update the UI in response to state changes.
- Integrate Redux DevTools with your Redux application for debugging.

### Agenda:
1. **Introduction to Redux**
   - What is Redux?
   - Why use Redux?
   - Core concepts of Redux

2. **Creating the Redux Store**
   - Overview of `createStore`
   - Initializing the store with a default state

3. **Writing and Dispatching Actions**
   - Defining action types
   - Creating action creators
   - Dispatching actions to the store

4. **Handling State Changes with Reducers**
   - Understanding pure functions and reducers
   - Writing a reducer function
   - Combining multiple reducers (optional)

5. **Subscribing to Store Updates**
   - Using `store.subscribe()` to listen to state changes
   - Updating the UI based on state changes

6. **Building a Budget Management Application**
   - Setting up the HTML and form
   - Connecting the form to Redux actions
   - Implementing actions to multiply, divide, and power the budget value
   - Subscribing to store updates to reflect the changes in the UI

7. **Integrating Redux DevTools**
   - Introduction to Redux DevTools
   - Adding DevTools support to the `createStore` function

8. **Q&A and Wrap-Up**
   - Answering questions and clarifications
   - Final thoughts and resources