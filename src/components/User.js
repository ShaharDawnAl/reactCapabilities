import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/*in order to call the function from the App.js we need to use name()*/}
                {/*if we pass the name without the function from the App.js we need to use name only*/}
                {/*Change true or false to see name or guest*/}
                { this.props.render(true) }
            </div>
        )
    }
}

export default User;
