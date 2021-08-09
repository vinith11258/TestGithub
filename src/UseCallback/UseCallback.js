import React, { useCallback, useEffect, useMemo, useState } from "react";
import UseCallbackChildComp from './UseCallbackChildComp'

function UseCallback(){
    const [val, setVal] = useState(() => {return 10})
    const [val1, setVal1] = useState(() => {return 20})

    const addNum = useCallback((num) => {
        return val1 + num + 1;
    }, [val1])

    useEffect(() => {
            console.log('Nit Test!')
    }, [addNum])

    return(
        <>
            <h1>Parent Component</h1>
            {/* <UseCallbackChildComp ranNum = {addNum}/> */}
            {val1 % 2 == 0 ? 'Even' : 'Odd'}
            <br />
            My Val is : {val}<br/>
            <button onClick = {() => {setVal(val => val + 1)}}>Add</button>
            <br/>
            My Val 1 is : {val1}<br/>
            <button onClick = {() => {setVal1(val => val + 1)}}>Add1</button>

        </>
    );
}

export default UseCallback