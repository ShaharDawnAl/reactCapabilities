import React, { Component } from 'react'
import Input from './Input';

//we want the child component in the parent component will get the focus by using refs 
//** have to be a class not functional in function component** 
class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
