import React, { createContext, useReducer } from 'react';

// We create and export our context in order for it to be used in components
export const CountContext = createContext();

// This is our initial state
const CountingState = 0;

// Here is our reducer action function that takes state and action as the parameter to be used with useReducer
const reducer = (state, action) => {
    switch (action) {
    case 'increment':
        return state + 1;
    case 'decrement':
        return state - 1;
    case 'reset':
        return state = 0
    default:
        throw new Error();
    }
}   

// We have to pass in props with the provider, in this case the props are Count.js and Buttons.js because they are the children of the provider in Homepage.js
function GlobalContext(props) {

    // Creating the userReducer and passing our reducer function and the CountingState
    const [count, dispatch] = useReducer(reducer, CountingState)
    
    return (
        // The provider must always have a value, in this case we have two values needed, the state and the action function
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            {/* We must return props.children in order for the app to render, in this case it will render all the children wrapped with the provider */}
            {props.children}
        </CountContext.Provider>
    )
}
        
// Exporting GlobalFunction provider so we can wrap the children in Homepage.js
export default GlobalContext;