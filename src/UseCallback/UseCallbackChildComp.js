import { useState, useRef, useEffect } from "react";

export default function ChildComp(props){
    console.log(props)
    
    useEffect(() => {
        console.log(`I'm child  component!`)
    }, [props.ranNum])
    const [ranNum, setRanNum] = useState(() => 0)
    const num = useRef(null)
    return(
        <div>
            {console.log('out side!')}
            <h1>VINITH - {props.ranNum(10)}</h1>
            <h1>My Random Number: {ranNum}</h1>
            <br />
            Any Number: <input type = 'number' ref = {num}/>
            <button onClick = {() => {
                console.log(`Number is: ${num.current.value}`)
                setRanNum(props.ranNum(num.current.value))
            }}>Give some Random num for the given num</button>
        </div>
    );
}