import React from 'react'
import UseContext2 from './UseContext2';

export const NameContext = React.createContext();
const userInfo = {
    name : 'vinith',
    age : 25,
    study : 'BE',
}
function UseContext1() {

    return(
        <>
        <h1>I'm Context 1</h1>
        <NameContext.Provider value = {userInfo}>
            <UseContext2 />
        </NameContext.Provider>
        </>
    );
}

export default UseContext1