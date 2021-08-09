import React, { useRef } from "react";
import useLocalStorageCustomHooks from "./useLocalStorageCustomHooks"

function CustomHooks(){
     const newVal = useRef();
     const [val, setValue, resetValue] = useLocalStorageCustomHooks('fls','vinith')
    return(
        <>
        BOW
        <h3>My Local Storage Value is: {val}</h3>
        New Value: <input type = 'text' ref = {newVal}/>
        <button onClick = {() => {
            setValue(newVal.current.value)
            console.log(newVal.current.value)
        }}>
            Add
        </button>
        <button onClick = {resetValue}>Reset</button>

        </>
    );
}

export default CustomHooks