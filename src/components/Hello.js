import React from 'react';

//functional component
const Hello = () => {
    //with jsx is much better and simple
    return (
        <div className="dummyClass">
            <h1>Hello THERE</h1>
        </div>
    )
    // without jsx 
/*  return React.createElement(
        'div', 
        {id:'Hi',className:'dummyClass'},
        React.createElement('h1',null,'Hello sHaHaR')
    );*/

}

export default Hello;

/*
    //more changes with jsx
    for -> htmlFor
    camelCase property naming convention
    onclick -> onClick
    tabindex -> tabIndex  
*/