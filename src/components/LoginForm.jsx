import React, { Component } from 'react';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import Register from "./RegisterForm"


class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username : '',
            email : '',
            password : ''
        }
        this.submitForm = this.submitForm.bind(this)
        this.getInfosFromPost = this.getInfosFromPost.bind(this)
        this.getInfosUser = this.getInfosUser.bind(this)
    }
    
    getInfosFromPost = async () => {
        try {
            return await axios.post('/login')
        } catch (error) {
            console.error(error)
        }
    }
      
    getInfosUser = async () => {

        const infos = await this.getInfosFromPost()
        if (infos) {
          console.log(infos)
        }
    }
    submitForm = event => {
        // fetch('http://localhost:3000/login').then(res => console.log(res.body.email))
        this.getInfosUser()
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <form className="row" action="/login" method="post" onSubmit={this.submitForm}>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <button type="submit" className="m-auto btn btn-secondary">Log in</button>
                </form>
                <Link to="/register">Sign in</Link>
                <Route path="/register" component={Register} />
            </div>
            )
        }
}

export default LoginForm