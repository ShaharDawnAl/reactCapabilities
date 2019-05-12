import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    render() {
        const { count , incrementCount } = this.props;
        return (
            <div>
                <button className="div-state" onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter2;
