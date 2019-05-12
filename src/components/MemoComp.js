import React from 'react'

//Memo is like pure component for class only for a Functional component
function MemoComp({name}) {
    console.log('Rendering Memo Component');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp); 
