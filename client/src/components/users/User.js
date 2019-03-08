import React from 'react'

function User(props) {
    return (
        <div>
            <div>{props.user.username}</div>
        </div>
    )
}

export default User;