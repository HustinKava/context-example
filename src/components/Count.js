import React, { useContext } from 'react';
import { CountContext } from './GlobalContext';

function Count() {

    // Creating the context to use the state
    const context = useContext(CountContext)

  return (
    <div>
        {/* Returning the state value so it can be visually seen */}
        {context.countState}
    </div>
  )
}

export default Count