import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Shahar', 
      }
      console.log('LifeCycleB Constructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivededStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount \n');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate \n');
    }

    render() {
        console.log('LifeCycleB Render');
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB;
