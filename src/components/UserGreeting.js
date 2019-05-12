import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
      }
    }
    

    render() {
        /*
        //for returning nothing when Shahar is not logged in
        return this.state.isLoggedIn && <div><h1>Welcome Shahar</h1></div>
        */
       
        return (
            this.state.isLoggedIn ? <div><h1>Welcome Shahar</h1></div> : <div><h1>Welcome Guest</h1></div>
        )
        
        
        
        //Element var aproach is better than 2 or more returns cases 
        /*
        let message;
        if(this.state.isLoggedIn){
            message = <div><h1>Welcome Shahar</h1></div>;
        } else {
            message = <div><h1>Welcome Guest</h1></div>;
        }
        return <div>{ message }</div>;
        */
        /*
        if(this.state.isLoggedIn){
            return (
                <div><h1>Welcome Shahar</h1></div>
            )
        } else {
            return (
                <div><h1>Welcome Guest</h1></div>
            )
        }*/
        
    }
}

export default UserGreeting
