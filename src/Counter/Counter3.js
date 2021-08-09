import React from 'react'

const commonFun = (WrappedComponent) =>{
        class NewComponent extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    cc : 0,
                }
            }

            incCC = () => {
                console.log(`I'm INCCC from HOC`)
                this.setState(state => {
                    return {cc : state.cc + 1}
                })
            }

            decCC = () => {
                console.log(`I'm DECCC from HOC`)
                this.setState(state => {
                    return {cc : state.cc - 1}
                })
            }

            render(){
                return(
                    <WrappedComponent HOC = {this.state.cc} {...this.props} incCC = {this.incCC} decCC = {this.decCC}/>
                )
            }
        }

        return NewComponent
}

export default commonFun