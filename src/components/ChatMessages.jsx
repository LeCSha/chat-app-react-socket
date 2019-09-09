import React, { Component } from 'react';
import socketClient from 'socket.io-client';
import CustomScroll from 'react-customscroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
            // let item = []
            // if (localStorage.getItem('alMessages')){
            //     const itemJSON = localStorage.getItem('alMessages')
            //     item = JSON.parse(itemJSON)
            //     console.log(item)
            // }
            // let newItem = {username : username, message : this.state.value} 
            // item = [...item, newItem]
            // localStorage.setItem('alMessages', JSON.stringify(item))
            // console.log(localStorage.getItem('alMessages'))
        })
    }

    render() {
        const {messages} = this.state;

        return (
            <div style={styleChatMessages}>
                <CustomScroll style={{right:'0'}} scrollAreaColor="rgba(0, 0, 0, 0.4)" scrollWidth="10px" scrollBarRadius="20px" scrollBarColor="rgba(0, 0, 0, .8)">
                    {messages.map(m => {
                        return (
                            <div>
                                <FontAwesomeIcon icon={faUser}/>
                                <span className="message"> {m.username}</span>
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