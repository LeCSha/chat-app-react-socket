import React, { Component } from 'react';
import socketClient from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const socket = socketClient('http://localhost:5000')

const styleButton = {
    borderRadius: '0 10px 10px 0'
}

class ChatSendMessage extends Component {
    constructor() {
        super();
        this.state = {
            value : ''
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }
    sendMessage = (event) => {
        if (this.state.value) {
            if (!localStorage.getItem('username')) localStorage.setItem('username','Anonymus')
            const username = localStorage.getItem('username')
            socket.emit('new_message', {username: username, message : this.state.value})
            this.setState({value : ''})
        }
        event.preventDefault();
    }

    inputChange = (event) => {
        let target = event.target
        this.setState({
            value : target.value
        })
    }

    render() {
        return (
            <form className="row" onSubmit={this.sendMessage}>
                <div class="card-footer">
                    <div class="input-group">
                        <textarea name="" className="type_msg form-control type_msg" onChange={this.inputChange} value={this.state.value} placeholder="Type your message..."></textarea>
                        <div className="input-group-append">
                            <button style={styleButton} className="input-group-text send_btn" type="submit" ><FontAwesomeIcon icon={faCoffee}/></button>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default ChatSendMessage;