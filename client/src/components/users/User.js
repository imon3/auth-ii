import React from 'react'

function User(props) {
    console.log(props)
    return (
        <div>
            <div>{props.username}</div>
        </div>
    )
}

export default User;