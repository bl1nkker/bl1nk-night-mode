import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignOutLinks extends Component {
    render() {
        return (
            <div>
                <ul className='right'>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink to='/signin'>Login</NavLink></li>
                </ul>
            </div>
        )
    }
}