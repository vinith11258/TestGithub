import React from 'react'
import {Component} from 'react'
class Timer1 extends Component{
    constructor(props)
    {
        super(props)
        console.log(props)
        this.state = {
            myTime : new Date()
        }
    }
    componentDidMount()
    {
        console.log(`I'm in the COMPONENT DID MOUNT`)
    }

    render(){
        console.log('TIMER 1: ',this.props.children);
        return(
            <>
            <h1>
                {this.state.myTime.toLocaleTimeString()}           
                <b>
                {this.props.mytime}
                </b>
                
            </h1>
            <div>
                <button onClick = {this.props.timeStart} style = {{background:'lightblue'}}>Start</button>
                <button style = {{background:'lightblue'}}>Stop</button>
                <button style = {{background:'lightblue'}}>Reset</button>
            </div>
                </>
        );
    }
}

export default Timer1