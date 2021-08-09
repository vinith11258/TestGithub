import { useReducer, useRef } from "react";

const initialState = [];
const reducer = (state, action) => {
    switch(action.type)
    {
        case 'add':
            let users = [...state]
            users.push(action.user)
            return users
    }
}
function ComplexReducer(){
    const [userInfo, dispatch] = useReducer(reducer, initialState)
    const name = useRef(null)
    const age = useRef(null)
    console.log(userInfo)
    return(
        <>
        <br/>
        <br/>
        Name : <input type = 'text' ref = {name}/><br/>
        Age : <input type = 'number' ref = {age}/><br/>
        <button style = {{backgroundColor : 'green', color : 'white', cursor : 'pointer'}} onClick = {
            () =>{
                console.log('add user clicked!')
                dispatch({type: 'add', user : {name : name.current.value, age : age.current.value}})
            }
        }>
            Add
        </button>
        </>
    )

}

export default ComplexReducer;