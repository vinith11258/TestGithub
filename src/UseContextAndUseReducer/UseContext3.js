import React from 'react'
import {useContext} from 'react'
import {NameContext} from './UseContext1'

function UseContext3() {
    const userInfo = useContext(NameContext)
    console.log(userInfo)
    return(
        <>
            <h1>I'm Context 3</h1>
            {userInfo.name}
        </>
    );
}

export default UseContext3