import React from 'react';
import ChatMessages from './ChatMessages';
import LiveVisitors from './LiveVisitors'
import ChatSendMessage from './ChatSendMessage'

const styleChatComponent = {
    minHeight : '450px',
    height : '90vh', 
    border : '1px solid rgba(39, 64, 57, .7)',
    margin : '5px',
    borderRadius: '25px',
    backgroundColor: 'rgba(39, 64, 57, .8)',
    WebkitBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    MozBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)'
}

const ChatTemplate = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-3 ml-5" style = {styleChatComponent}>
                <LiveVisitors/>
            </div>
            <div className="col-md-8 ml-3 pr-0 overflow-hidden" style = {styleChatComponent}>
                <ChatMessages/>
                <ChatSendMessage/>
            </div>
        </div>
    )
}

export default ChatTemplate