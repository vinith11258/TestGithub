import React, { useState } from 'react'
import Counter2 from './Counter2'
import commonFun from './Counter3'

export const setcountMethod = React.createContext()
function Counter1(props){
    const [count, setCount] = useState(0)
    console.log(props)
    return(
        <>
            <h1>Counter value - {count}</h1>
            <h1>HOC cc - {props.HOC}</h1>
            <h3>COUNTER - I</h3>
            <button onClick = {()=>{setCount(count => count+1)}}>Add</button>
            <button onClick = {()=>{setCount(count => count-1)}}>Minus</button>
            <button onClick = {() => {props.incCC()}} style = {{backgroundColor : 'lightblue'}}>Add</button>
            <button onClick = {props.decCC} style = {{backgroundColor : 'lightblue'}}>Add</button>
            <br/>
            ---------------
            <setcountMethod.Provider value = {{setount :setCount, count : count}}>
               <Counter2 count = {count} setCount = {setCount} />
            </setcountMethod.Provider>
        </>
    )
}

export default commonFun(Counter1)