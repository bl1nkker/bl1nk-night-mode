import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'


export default class NavBar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Mario Plan</Link>
                    <SignInLinks />
                    <SignOutLinks />
                </div>
                
            </nav>
        )
    }
}
