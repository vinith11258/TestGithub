import { useEffect, useState, useLayoutEffect } from "react";

function ArrayUseState(props){
    console.log(props.userInfo.name)
    const [myInfo, setMyInfo] = useState(() => [{name: 'vinith', age : 25, study : 'BE'},{name: 'elngo', age : 25, study : 'NET'}, {name: 'vicky', age : 27, study : 'business'}])

    //useeffect
    useEffect(()=>{
        console.log(myInfo)
        document.body.style.backgroundColor = 'green';
       return() => {

       }
    },[myInfo])

    //uselayout effect hooks
    useLayoutEffect(()=>{
        document.body.style.backgroundColor = 'red';
    })
    //add value to the state
    const addVal = (e) => {
        e.preventDefault();
        console.log('Im from the submit !')
        let y = [...myInfo]
        console.log(y)
         y.push({name: document.getElementById('name').value, age : document.getElementById('age').value, study : document.getElementById('study').value})
        setMyInfo(y);
        console.log(myInfo)
    }
    return(
        <>
            <h1>My Array like object use state</h1>
            {
                myInfo.map((item, index) => {
                    const {name, age, study} = item
                    return(
                        <div key = {`${index}, ${item}`}>
                            Name:<span>{name}</span>
                            Age:<span>{age}</span>
                            Study:<span>{study}</span>
                        </div>
                    );
                })
            }
            {/* {console.log(myInfo)} */}
            <h2>Adding Info</h2>
            <form onSubmit = {addVal}>
                Name: <input type = 'text' id = 'name'/><br/>
                Age: <input type = 'number' id = 'age'/><br/>
                Study: <input type = 'text' id = 'study'/><br/>
                <button type = 'submit'>Submit</button>
            </form>
        </>
    );
}

export default ArrayUseState