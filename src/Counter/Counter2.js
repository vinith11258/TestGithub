import React from 'react'
import commonFun from './Counter3'
import Counter4 from './Counter4'

function Counter2(props)
{
    const {count, setCount} = props
    return(
        <>
            <h2>Counter II</h2>
            <h1>HOC cc - {props.HOC}</h1>
            <button onClick = {() => setCount(count + 1)}>Add</button>
            <button onClick = {() => setCount(count - 1)}>Minus</button>
            <button onClick = {() => {props.incCC()}} style = {{backgroundColor : 'lightblue'}}>Add</button>
            <button onClick = {props.decCC} style = {{backgroundColor : 'lightblue'}}>Add</button>
            <br />
            <Counter4 />
        </>
    )
}

export default commonFun(Counter2)