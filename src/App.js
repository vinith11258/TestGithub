import React from 'react'

class App extends React.Component{
    constructor(props)
    {
        //console.log(`${props}`)
        super(props)
        //console.log(`${props}`)
        this.state = {
            name : '',
            age : '',
            email : '',
        }
    }
    componentDidUpdate(){
        console.log('im component did update in APP.js')
    }
    componentWillUnmount(){
        console.log('Im APP unmount')
    }
    // this.finalSubmit(){
    //     console.log(`My name is: ${this.state.name} and my Age is: ${this.state.age} and my EmailId is: ${this.state.email}`)
    // }
    render(){
        return (
            <React.Fragment>
                <div>
                    <form>
                        Name: <input value = {this.state.name} name = 'name' type = 'text' onChange = {e => { this.setState({name : e.target.value})}}/><br />
                        Age: <input onChange = {e => {this.setState({age : e.target.value})}} value = {this.state.age} name = 'age' type = 'number'/><br />
                        Email: <input onChange = {e => {this.setState({email : e.target.value})}} value = {this.state.email} name = 'email' type = 'email'/><br />
                        <button type = 'submit'>Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default App