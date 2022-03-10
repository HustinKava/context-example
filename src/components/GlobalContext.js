import React, { createContext, useReducer } from 'react';

export const CountContext = createContext();

const CountingState = 0;

const  reducer = (state, action) => {
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

function GlobalContext(props) {
    const [count, dispatch] = useReducer(reducer, CountingState)
    
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            {props.children}
        </CountContext.Provider>
    )
}
        
export default GlobalContext;