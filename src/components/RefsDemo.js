import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        /*
        //this one is an older version of using refs
        //call back Ref
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
        */
    }
    
    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus();
        /*
        //the older way to mount the ref
        if(this.cbRef){
            this.cbRef.focus();
        }
        */
    }  

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                {/*this is an older version of using Ref*/}
                {/*<input type="text" ref={this.setCbRef} />*/}
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default RefsDemo
