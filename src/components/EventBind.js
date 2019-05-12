import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hey',

        };
        //to change the setState properly with react
        //this.clickHandler = this.clickHandler.bind(this);
    }

    /*
    clickHandler(){
        
        //changing message won't work on eventHandlers
        this.setState({
            message: 'Good Bye!',
        });
        console.log(this);
    }
    */

    /*
    clickHandler(){
        //in order for it to work we will add bind() on the onClick={this.something.bind(this)}
        //or change onClick={this.clickHandler.bind(this)} to onClick={ () => this.clickHandler() }
        //but it's not the best way to deal with react apps
        this.setState({
            message: 'Good Bye!',
        });
        console.log(this);
    }
    */

    clickHandler = () => {
        this.setState({
            message: 'Good Bye!',
        });
        console.log(this);
    }

    render() {
        return (
            <div>
            <div>state.message - {this.state.message}</div>
                {/*<button onClick={this.clickHandler}>Clicked from EventBind</button>*/}
                {/*This approach has performance issues <button onClick={this.clickHandler.bind(this)}>Clicked from EventBind</button>*/}
                {/*This approach is the esiest way to write if your code doesn't invovled re-rendering nested children components*/}
                {/*<button onClick={ () => this.clickHandler() }>Clicked from EventBind</button>*/}
                {/*The best ways to deal with events Handlers don't forget to add -> this.clickHandler = this.clickHandler.bind(this); to the constructor */}
                {/*or the last approach that has to have an arrow function yet it's still experimental*/}
                <button onClick={ this.clickHandler }>Click from EventBind</button>
            </div>
        )
    }
}

export default EventBind
