import React, { Component } from 'react';
import socketClient from 'socket.io-client';
import CustomScroll from 'react-customscroll'

const styleChatMessages = {
    minHeight: '350px',
    height: '70vh',
    overflow: 'hidden',
    direction: 'rtl'
}

class ChatMessages extends Component  {

    constructor() {
        super();
        this.state = {
            messages : []
        } 
    }
    componentDidMount() {
        const socket = socketClient('http://localhost:5000')
        socket.on('new_message', data => {
            this.setState({messages : [...this.state.messages, data]})
            // const msgJSON =  localStorage.getItem('message');
            // const messages = msgJSON && JSON.Parse(msgJSON);
            // console.log(messages)
        })
    }

    render() {
        const {messages} = this.state;
        return (
            <div style={styleChatMessages}>
                <CustomScroll style={{right:'0'}} scrollAreaColor="rgba(134, 190, 220, 0.3)" scrollWidth="10px" scrollBarRadius="20px" scrollBarColor="rgba(64, 68, 108, .7)">
                    {messages.map(m => {
                        return (
                            <div>
                                <span className="message"><i className="user fas fa-user"></i> {m.username}</span>
                                <p className="message">{m.message}</p>
                            </div>
                        )
                    })}
                </CustomScroll>
            </div>
        )
    }
}



export default ChatMessages