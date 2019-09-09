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
            return await axios.post('http://localhost:5000/login')
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
        fetch('http://localhost:5000/login').then(res => console.log(res))
        // this.getInfosUser()
        event.preventDefault();
    }
    render(){
        return (
            <div className="col-lg-5 col-md-6 m-auto">
                <form action="/login" method="post" onSubmit={this.submitForm}>
                    <div className="form-group col-md-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-12">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <div className="form-group m-auto col-md-6">
                        <button type="submit" className="form-control btn btn-secondary">Log in</button>
                    </div>
                </form>
                <Link to="/register">Register</Link>
                <Route path="/register" component={Register} />
            </div>
            )
        }
}

export default LoginForm