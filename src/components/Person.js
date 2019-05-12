import React from 'react'

//Functional component
//if you want to use personId on the child component
function Person({person,personId}) {
    return (
        <div>
            <h2>
                ID# {personId} - I am {person.name}, And I'm {person.age} y/o And I know {person.skill}.
            </h2>
        </div>
    )
}

export default Person
