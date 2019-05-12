import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked');
    }
  return (
    <div>
        {/*The eventHandler is a function not a function call so we don't write clickHandler()*/}
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;
