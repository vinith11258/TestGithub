import React from 'react'
import EnhancedComponent from './HigherOrderComp1'

function Higher1(props){
    return(
        <div>
            <h1>Higher1</h1>
            My name is:{ props.name } and my age is: {props.age}
        </div>
    )
}

export default EnhancedComponent(Higher1)