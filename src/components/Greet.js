import React from 'react';

//functional component
/*
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            { props.children }
        </div>
    )
}
*/

/*
//ES way for writing functions 
//const Greet = () => <h1>Hello Shahar</h1>
//you can do it the traditional way 
function Greet(){
    return <h1>Hello Shahar</h1>
}
*/ 

/*
//DISTRUCTURED FUNCTION
const Greet = ({name,heroName,children}) => {
    return (
        <div>
            {/*FOR DISTRUCTURED FUNCTION DON'T USE PROPS}/*
            {<h1>Hi {name} a.k.a {heroName}</h1>}
            { children }
        </div>
    )
}
*/


//another way for DISTRUCTURED FUNCTION
const Greet = (props) => {
    console.log(props);
    const {name, heroName,children} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children} 
        </div>
    )
}


//in this case you can use anyname you want on App.js when importing with no {}
export default Greet;
//also can be writen that way... but then you have to import with {} and use the same name
//export const Greet = () => <h1>Hello Shahar</h1>
