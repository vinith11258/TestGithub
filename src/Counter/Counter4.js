import React from 'react'
import { useContext } from 'react'
import { setcountMethod } from './Counter1'


function Counter4()
{
    const ccc = useContext(setcountMethod)
    console.log('Context value:', ccc)
    return(
        <>
        <h1>
            Counter 4 {ccc.count}
        </h1>
        <button onClick = {() => {ccc.setount(ccc.count + 1)}}>Add</button>

        </>
    )
}

export default Counter4