import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
  render() {
    return (
      <div className="div-state">
        <UserConsumer>
            {
                (username) => {
                    return <div>Hello {username}</div>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF;
