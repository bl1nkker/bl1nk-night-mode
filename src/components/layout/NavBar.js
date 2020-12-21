import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'


class NavBar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Mario Plan</Link>
                    {this.props.auth.uid ?
                    <SignInLinks /> 
                    :
                    <SignOutLinks />}
                    
                    
                </div>
                
            </nav>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state.firebase.auth.isEmpty)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar)