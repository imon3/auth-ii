import React from 'react';
import axios from 'axios';
import User from './User';
import Authentication from '../auth/Authentication';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                {this.state.users.map(user => {
                    return <User key={user.id} user={user} />
                })}
            </div>
        )
    }
}

export default Authentication(Users);