import React from 'react'
import Person from './Person';

function NameList() {
    /*
    //use the ***index*** option only if: 
    //1. the list doesn't have a unique ID,
    //2. the list is static and won't change,
    //3. the list will never be restored or filtered.
    //***index*** can cause a lot of trouble when you use it on a dynamic list
    const names = ['Bruce','Clark','Diana','Bruce'];
    const nameList = names.map( (name,index) => <h2 key={index} >{index} {name}</h2> ); 
    */

    //for using an array of objects
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'  
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'  
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'  
        }

    ];
    /*
    const personsList = persons.map( (person) => <h2>
        I am {person.name}, And I'm {person.age} y/o And I know {person.skill}.
    </h2> ); 
    */

    const personsList = persons.map( (person) => 
        /*
        key needs to be unique and isn't accessable on child components
        so if trying to pass a value to the child component 
        pass it as a different prop like perosnId
        */
        <Person key={person.id}  personId = {person.id} person={person} /> 
    );
    
    
    /*
    //for a simple array list
    const names = ['Bruce','Clark','Diana'];
    const nameList = names.map( (name) => <h2>{name}</h2> ); 
    */
    return (
        
        //for an array of objects
        <div>
            {personsList}
        </div>
        
        
        /*
        //for a simple array list
        <div>
            {nameList}
        </div>
        */
    )
}

export default NameList

