import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';
// import Timer from './Timer'
// import Timer from './FunctionalHooks/Timer'
// import ArrayUseState from './FunctionalHooks/ArrayUseState'
// import CustomHooks from "./FunctionalHooks/CustomHooks";
// import UseContext1 from './UseContextAndUseReducer/UseContext1'
// import Reducer from './Reducer/Reducer'
 import UseCallback from './UseCallback/UseCallback'
// import UseMemo from './UseMemo/UseMemo'
// import Higher1 from './HigherOrderComp/Higer1'
import Counter1 from './Counter/Counter1';

const myInfo = [{
        name : 'ko',
        age : 23,
        study : 52,
    },
    {
        name : 'ko1',
        age : 231,
        study : 521,
    },
    {
        name : 'ko2',
        age : 232,
        study : 522,
    }
]

ReactDOM.render(
    <>
        {/* <App/> */}
        {/* <Timer userInfo = {{name : 'vinith', age : 25, study : 'BE'}} myInfo = {myInfo}/> */}
        {/* <ArrayUseState userInfo = {{name : 'vinith', age : 25, study : 'BE'}}/> */}
        {/* <CustomHooks /> */}
        {/* <UseContext1 />
        <Reducer/> */}
        <UseCallback />
        {/* <UseMemo /> */}
        {/* <Higher1 age = '25'/> */}
        {/* {console.log(<Counter1 />)}
        {console.log("hi")} */}
        {/* <Counter1 /> */}

    </>,
    document.getElementById('root')
);