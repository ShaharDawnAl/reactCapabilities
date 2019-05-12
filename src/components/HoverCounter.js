import React, { Component } from 'react';
import generalCounter from './GeneralCounter';

class HoverCounter extends Component {

    render() {
        const { count ,incrementCount } = this.props;
        return (
            <div>
                <h2 className="div-state" onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

//passing a parameter into HOC generalCounter
export default generalCounter(HoverCounter, 10 );
