import { useState, useRef, useEffect } from 'react'
import App from '../App'


function Timer()
{

    const [timer, setTimer] = useState((state) => {console.log(state); return 0});
    const [timer1, setTimer1] = useState((state) => {console.log(state); return 0});
    const [toggle, setToggle] = useState(true)
    const clearInt = useRef()
    const onClearInt = useRef();
    //function
    const start = () => {
        console.log('Im start method.')
        clearInt.current = setInterval(() => {setTimer(timer => timer+1)}, 1000)
    }    

    const reset = () => {
        setTimer(0);
        start();
    }

    const stop = () =>{
        clearInterval(clearInt.current)
    }

    //useEffect
    useEffect(() =>{
        //component did mount
        console.log(`I'm component did mount`);
        onClearInt.current = setInterval(()=>{ setTimer1(preTime => preTime+1)}, 1000)
        return() => {
            //component did unmount
            console.log(`I'm omponent will unmount`)
            clearInterval(onClearInt.current)
        }
    },[toggle]);
    return(
        <div>
            {toggle && <App />}
            <b>My 1t function component</b><br />
            {`TImer: ${timer}`}
            <br/>
            <b>On page show timer</b>
            <br/>
            <h1>{timer1}</h1>
            <br />
            <button onClick = {start}>Start</button>
            <button onClick = {stop}>Stop</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {() =>{
                setToggle(preval => !preval)
            }}>Toggle</button>
        </div>
    );
}

export default Timer