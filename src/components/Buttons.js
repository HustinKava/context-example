import React, { useContext } from 'react';
import { CountContext } from './GlobalContext';

function Buttons() {

  const context = useContext(CountContext)


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