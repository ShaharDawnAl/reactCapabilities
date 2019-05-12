import React from 'react'

//Functional component
/*
function ChildComponent(props) {
    return (
        <div>
            <button onClick={ props.greetHandler }>Greet Parent</button>
        </div>
    )
}
*/

//for other way to get any number of props to the eventHandler better use without the props by distructure the function component
//use the arrow function for passing parameters 
function ChildComponent(props) {
    return (
        <div>
            <button onClick={ () => props.greetHandler('Child') }>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;
