import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/auth/login', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                this.setState({
                    username: '',
                    password: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>
                    <input placeholder='username' type='text' name='username' value={this.state.username} onChange={this.handleInput} />
                    <input placeholder='password' type='text' name='password' value={this.state.password} onChange={this.handleInput} />
                    <button type='submit'>Log-In</button>
                </form>
            </div>
        )
    }
}

export default Login;