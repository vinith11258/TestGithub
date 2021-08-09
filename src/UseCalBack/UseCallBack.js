import React, { useState } from 'react'

export default function UseCallBack1({addNumer})
{
    console.log('TOp Callback', addNumer)
    const [num, setNum] = useState(0)
    const addNum = () => {
        console.log('Im add num from CAL BACK!')
        setNum(addNumer)
    } 
    return(
        <>
        <h1>I'm Use UseCallback</h1>
        <button onClick = {addNum}>Num - {num ?  'even' : 'Odd'}</button>
        </>
    )
}