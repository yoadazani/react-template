import React from 'react'
import profileImage from './assets/profile.png'
import Count from './components/Count'

export const App = () => {
    const name = "process.env.name"

    return (
        <div>
            <h1>Hello World my name is  and I am 27 years old</h1>
            <img src={profileImage} alt="profile" width="200" height="200" />
            <Count />
        </div>
    )
}
