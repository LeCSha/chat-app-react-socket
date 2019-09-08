import React from 'react';
import { Route, Link} from 'react-router-dom';
import routes from "../routes"
import Login from "./LoginForm"
import Register from "./RegisterForm"

const styleHomeComponent = {
    // maxHeight : '500px',
    // minWidth : '200px',
    // minHeight : '200px',
    border : '1px solid rgba(39, 64, 57, .7)',
    margin : '5px',
    borderRadius: '25px',
    backgroundColor: 'rgba(39, 64, 57, .8)',
    WebkitBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    MozBoxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)',
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.4)'
}
const Home = () => {
    return (
        <div className="position-relative">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/register">Sign in</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </div>
    )
}

export default Home