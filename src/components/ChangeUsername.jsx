import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ChangeUsername = (props) => {

    const [username, setUsername] = useState('')
    
    const userInputChange = event => {
        setUsername(event.target.value)
    }

    const resetInput = () => {
        setUsername('')
    }
    const submitChange = event => {
        event.preventDefault()
        props.change(username)
        resetInput()
    }
    return <form className="username-form p-5 mt-2">
                <h4 className="username-title">Change your username</h4>
                <div className="row username-block">
                    <input
                        className="col-8 form-control username-input"
                        value={username}
                        onChange={userInputChange}
                        type="text"
                        placeholder="Anonymous..."
                        style={{textAlign:'left', backgroundColor:'rgba(0, 0, 0, .5)', border:'none', borderRadius:'5px 0 0 5px'}}
                    />
                    <input 
                        className="username-submit input-group-text"
                        onClick={submitChange}
                        type="submit" value="GO"
                        style={{textAlign:'left', backgroundColor:'rgba(0, 0, 0, .8)', border:'none', borderRadius:'0 5px 5px 0', marginLeft:'-1px'}}
                    />
                </div>
            </form>
}

export default ChangeUsername;