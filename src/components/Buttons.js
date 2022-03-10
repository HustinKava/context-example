import React, { useContext } from 'react';
import { CountContext } from './GlobalContext';

function Buttons() {

  // Creating the context to use the reducer function
  const context = useContext(CountContext)

  // The onClicks have a callback function that execute the action rules set up 
  return (
    <>
    <button
      onClick={() => context.countDispatch("decrement")}
    >
      -
    </button>
    <button
      onClick={() => context.countDispatch("reset")}
    >
      reset
    </button>
    <button
      onClick={() => context.countDispatch("increment")}
    >
      +
    </button>
    </>
  )
}

export default Buttons;