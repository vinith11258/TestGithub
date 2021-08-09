import { useState } from "react";

export default function LocalStorageCustomHooks(key, initialVal){
    const [val, setVal] = useState(() => {
        const val1 = localStorage.getItem(key)
        return val1 || initialVal
    })
    
    const setValue = (newVal) => 
    {
        setVal(newVal)
        localStorage.setItem(key, newVal)
    }
    const resetValue = () =>
    {
        setVal(initialVal)
        localStorage.setItem(key, initialVal)
    }
    return [val, setValue, resetValue]
}