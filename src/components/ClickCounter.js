import React, { Component } from 'react';
import generalCounter from './GeneralCounter';

class ClickCounter extends Component {

    render() {
        const { count ,incrementCount } = this.props;
        return (
            <div>
                <button className="div-state" onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}
//passing a parameter into HOC generalCounter
export default generalCounter(ClickCounter, 5 );
