import React from 'react';
import axios from 'axios';
import User from './User';

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
        return (
            <div>
                {this.state.users.map(user => {
                    return <User key={user.id} user={user} />
                })}
            </div>
        )
    }
}

export default Users;