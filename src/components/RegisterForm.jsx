import React, { Component } from 'react';
import axios from 'axios'


class RegisterForm extends Component {
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
                <form action="/register" method="post" onSubmit={this.submitForm}>
                    <div className="form-group col-md-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control"  placeholder="Username"/>
                    </div>
                    <div className="form-group col-md-12">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <button type="submit" className="m-auto btn btn-secondary">Register</button>
                </form>
            </div>
            )
        }
}

export default RegisterForm