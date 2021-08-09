import { useReducer } from "react";
import ComplexReducer from './ComplexReducer'

const initialState = 0;
const reducer1 = (state, action) => {
    switch(action)
    {
        case 1: 
            return state + 1;
        case 2: 
            return state - 1;
        case 3:
            return initialState;
        default:
            return state;
    }
}

function Reducer() {
const [count, dispatch] = useReducer(reducer1, initialState)
    return(
        <>
        <h1>Count - {count}</h1>
        <button onClick = {() => dispatch(1)}>
            Add
        </button>
        <button onClick = {() => dispatch(2)}>
            Minus
        </button>
        <button onClick = {() => dispatch(3)}>
            Reset
        </button><br/>
        <ComplexReducer/>
        </>

    );
}

export default Reducer;