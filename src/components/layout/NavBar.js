import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'


class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar-left'>
                    <Link to='/' className='navbar-logo'>
                        <span>N</span>
                        <span>i</span>
                        <span>g</span>
                        <span>h</span>
                        <span>t</span>
                        <span>m</span>
                        <span>o</span>
                        <span>d</span>
                        <span>e</span>
                    </Link>
                    
                    {this.props.auth.uid && <NavLink to='/profile' className='navbar-user-icon mobile-profile'>{this.props.profile.initials}</NavLink>}
                </div>
                    {this.props.auth.uid ?
                    <SignInLinks /> 
                    :
                    <SignOutLinks />}
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)