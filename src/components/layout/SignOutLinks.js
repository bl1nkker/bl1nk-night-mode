import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignOutLinks extends Component {
    render() {
        return (
            <>
                <div className='navbar-buttons'>
                    <NavLink className='navbar-button' to='/signup'>Sign Up</NavLink>  
                    <NavLink className='navbar-button' to='/signin'>Login</NavLink>
                </div>

                <div className='navbar-buttons-mobile'>
                    <NavLink className='navbar-button' to='/signup'>Sign Up</NavLink>  
                    <NavLink className='navbar-button' to='/signin'>Login</NavLink>
                </div>
            </>
                
        )
    }
}