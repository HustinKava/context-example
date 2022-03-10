import React, { useContext } from 'react';
import { CountContext } from './GlobalContext';

function Buttons() {

  // Creating the context to use the reducer function
  const context = useContext(CountContext)

  const styles = { fontSize: "50px", padding: "10px", margin: "10px", borderRadius: "10px"}

  // The onClicks have a callback function that execute the action rules set up 
  return (
    <>
      <button
        onClick={() => context.countDispatch("decrement")}
        style={styles}
      >
        -
      </button>
      <button
        onClick={() => context.countDispatch("reset")}
        style={styles}
      >
        reset
      </button>
      <button
        onClick={() => context.countDispatch("increment")}
        style={styles}
      >
        +
      </button>
    </>
  )
}

export default Buttons;