import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Shahar', 
      }
      
      console.log('LifeCycleA Constructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivededStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount \n'); 
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate \n');
    }

    changeState = () => {
        this.setState({
            name: 'Shahar Changed the state',
        });
    }
    

    render() {
        console.log('LifeCycleA Render');
        return (<div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
        </div>)
    }
}

export default LifeCycleA;
