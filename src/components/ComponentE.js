import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';


class ComponentE extends Component {

    //the limitations are :
    //1.This contextType only works with class components
    //2.Can only subscribe to a single context using contextType
    static contextType = UserContext;
    
    render() {
        return (
            <div >
                <ComponentF />
                Component E Context {this.context}
            </div>
        )
    }
}

//same as static contextType = UserContext;
//ComponentE.contextType = UserContext;

export default ComponentE;
