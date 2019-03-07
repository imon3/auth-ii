import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.interceptors.request.use(
    function (options) {
        options.headers.authorization = localStorage.getItem('jwt')
        return options;
    },
    function (err) {
        return Promise.reject(err)
    }
);

export default function (Component) {
    return class Authentication extends React.Component {

        render() {
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <div>Please Log In</div>

            return (
                <div>{token ? <Component {...this.props} /> : notLoggedIn}</div>
            )
        }
    }
}