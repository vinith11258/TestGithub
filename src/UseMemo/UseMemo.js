import React, { useMemo, useState } from 'react'
import UseCallBack1 from '../UseCalBack/UseCallBack'

function UseMemo(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(100)
    const add1 = () => {
           console.log('Add1')
           setNum1(num1 + 1)
    }
    const add2 = () => {
       console.log('Add2')
       setNum2(num2 + 1)
    }
    const findEven = useMemo(() => {
        console.log('Even')
        return num1 % 2 === 0
    }, [num1])
    return(
        <div>
            <button onClick = {add1}>Add1 - {num1}</button>
            {findEven ? 'Even' : 'Odd'}
            <button onClick = {add2}>Add2 - {num2}</button>

            <br/>
            Ans 1: {num1}<br/>
            Ans 2: {num2}
            <br/>
            <UseCallBack1 addNumer = {findEven}/>
        </div>
    );
}

export default UseMemo