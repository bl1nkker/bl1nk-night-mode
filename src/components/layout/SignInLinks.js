import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignInLinks extends Component {
    render() {
        return (
            <div>
                <ul className='right'>
                    <li><NavLink to='/create'>New Project</NavLink></li>
                    <li><NavLink to='/'>LogOut</NavLink></li>
                    <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
                </ul>
            </div>
        )
    }
}
