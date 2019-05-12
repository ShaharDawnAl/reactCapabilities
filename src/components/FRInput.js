import React from 'react'

//for sending Ref from parent to child 
//instead of writing a functional component you need to write this function
const FRInput = React.forwardRef( (props,ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    )}
);

/*
//functional component
function FRInput() {
  return (
    <div>
      <input type="text"/>
    </div>
  )
}
*/
export default FRInput;
