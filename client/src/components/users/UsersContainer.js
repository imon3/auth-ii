import React from 'react';
import axios from 'axios';

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
            <div></div>
        )
    }
}

export default Users;