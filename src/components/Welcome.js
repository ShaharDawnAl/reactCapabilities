import React,{ Component } from 'react';

//class component
class Welcome extends Component {
    render(){
        return <h1>Class Component - Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

/*
//DESTRUCTURED FUNCTION
class Welcome extends Component {
    render(){
        const {name,heroName} = this.props;
        //for state transfer
        //const {state1, state2} = this.state;
        return <h1>Class Component - Welcome {name} a.k.a {heroName}</h1>
    }

}
*/


export default Welcome;