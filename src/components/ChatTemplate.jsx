import React from 'react';
import ChatMessages from './ChatMessages';
import LiveVisitors from './LiveVisitors'
import ChatSendMessage from './ChatSendMessage'
import ChangeUsername from './ChangeUsername'


const styleChatComponent = {
    minHeight : '450px',
    height : '90vh', 
    border : '1px solid rgba(39, 64, 57, .7)',
    margin : '5px',
    borderRadius: '25px',
    backgroundColor: 'rgba(39, 64, 57, .5)',
    WebkitBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    MozBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)'
}

const ChatTemplate = () => {

    const newUsername = username => {
        localStorage.setItem('username', username)
    }
    return (
        <div className="container-fluid row">
            <div className="col">
                <div className="ml-5">
                    <ChangeUsername change={newUsername}/>
                </div>
                <div className="ml-5">
                    <LiveVisitors/>
                </div>
            </div>
            <div className="col-lg-8 ml-3 pr-0 overflow-hidden" style = {styleChatComponent}>
                <ChatMessages/>
                <ChatSendMessage/>
            </div>
        </div>
    )
}

export default ChatTemplate