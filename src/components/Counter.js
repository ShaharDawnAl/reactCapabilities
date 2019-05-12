import React ,{Component} from 'react';

//class component
class Counter extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         count: 0,
      }
    }
    
    increment = () => {
        //the state is not rerendering so we can't change state directly from a function 
        //only from the constructor or setState function 
        //this.state.count+= 1; this is why you should write so it will let react know to re-render
        /* 
        this.setState({
            count: this.state.count + 1,
        }, () => { 
            console.log('Callback Value', this.state.count);
        });
        */
        
        //in order to correct the multiple calls into single performence issue we need to do this
        //prevState is the last state before making changes to the state
        this.setState( ( prevState, props ) => ({
            count: prevState.count + 1,
            //for a function that uses the props also we use a name of props to pass it to this count 
            //count: prevState.count + props.addValue,
        })
        );
        //console.log is using this.state.count before setState 
        console.log('without Callback ' + this.state.count);
        
        
    }

    //this function won't increment 5 , it will only change into 1 5 times
    //because it regroups multiple calls into single performence
    //to solve this we need to send a function into setState method instead of passing in an object
    incrementFive = () => {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (<div>
            <div><h1>Count - { this.state.count }</h1></div>
            <button onClick={ () => this.incrementFive() }>Increment</button>
        </div>);
    }

}
export default Counter;