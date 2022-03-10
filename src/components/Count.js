import React, { useContext } from 'react';
import { CountContext } from './GlobalContext';

function Count() {
    const context = useContext(CountContext)

    console.log(context)


  return (
    <div>
        {context.countState}
    </div>
  )
}

export default Count