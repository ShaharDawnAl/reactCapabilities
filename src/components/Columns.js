import React from 'react'

function Columns() {
    /*
    //for using an array of items in the table as a column
    const items = [];
    */
    return (
        //the empty tag means it won't add an actual element to the DOM
        //the disadvantage is you can't add in the key attribute
        <>
            {/*
                items.map((item) => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                    ) 
                )
            */}

            <td>Name</td>
            <td>Shahar</td>
        </>
    )
}

export default Columns
