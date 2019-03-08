import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            department: ''
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        axios.post('http://localhost:5000/api/auth/register', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                this.setState({
                    username: '',
                    password: '',
                    department: ''
                })
                this.props.history.push('/users')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Create Username' type='text' name='username' value={this.state.username} onChange={this.handleInput} />
                    <input placeholder='Create Password' type='text' name='password' value={this.state.password} onChange={this.handleInput} />
                    <input placeholder='Enter Department' type='text' name='department' value={this.state.department} onChange={this.handleInput} />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Register;