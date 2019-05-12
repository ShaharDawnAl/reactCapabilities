import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments:'',
        topic:'react',
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value,
        });
    }

    handleCommentsChange = (event) => {
        this.setState({
          comments:event.target.value,  
        });
    }
    
    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value,  
          });
    }

    submitHandlerButton = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const { username , comments, topic } = this.state;
        return (
            <form onSubmit={this.submitHandlerButton}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                </div>
                
                <div className='div-state'>
                    <label className='comments'>Comments: </label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div className='div-state'>
                    <label >Topic: </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms;
