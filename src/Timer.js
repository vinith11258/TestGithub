import React from 'react'
import Timer1 from './Timer1'


class Timer extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            myTime : 0,
            sec : true,
        }
        
    }
    start(){
        console.log(this)
        this.timeId = setInterval(() => {this.setState({myTime : this.state.myTime + 1})}, 1000)
        this.startDisable = true;
    }

    stop(){
        console.log(this.timeId)
        clearInterval(this.timeId);
        this.startDisable = false;
    }

    reset()
    {
        clearInterval(this.timeId)
        this.setState({myTime : 0})
        console.log(this)
        this.start()
    }

    componentWillUnmount(){
       console.log('removed')
    }
    componentDidUpdate()
    {
        console.log('Updated!')
    }
    hide(){
        console.log('hide called!');
        this.setState({sec : !this.state.sec})
    }
    render(){
        console.log(this.props.myInfo)
        const y = this.props.myInfo;
        return(
            <>
                {this.state.sec && <Timer1
                     timeStart = {() => this.start()} 
                     mytime = {this.state.myTime}
                />}
                <h1>Timer page</h1>
                <h1>{this.state.myTime}</h1>
                <button disabled = {this.startDisable} onClick = {() => this.start()}>Start</button>
                <button onClick = {() => this.stop()}>Stop</button>
                <button onClick = {() => this.reset()}>Reset</button>
                <button onClick = {() => this.hide()}>Hide</button>
                <h2>My info form the props</h2>
                {
                    y.map((item, index) => {
                        
                        return(
                        <div key = {`${index}, ${item}`}>
                            Info No: {index+1}<br/>
                            Name:<span>{item.name}</span><br />
                            Age:<span>{item.age}</span><br />
                            Study:<span>{item.study}</span><br />
                        </div>);
                    })
                }
            </>
        )
    }
}

export default Timer