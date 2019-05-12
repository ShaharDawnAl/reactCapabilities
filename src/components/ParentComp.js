import React, { Component ,/*PureComponent*/ } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

/*
    //class ParentComp extends PureComponent {    
    //when adding a new item to the list don't mutate the existing objects or arrays 
    //by trying to push the item with props or state to the list because it will not re-render
    //even if there is a difference
    //instead always return a new object or an array when dealing with code components
*/

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shaharrr',
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Shaharrr',
            });
        }, 2000);
    }

    render() {
        console.log('****Parent Comp Render****');
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                {/* acts like PureComponent but in Function Component */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp;
