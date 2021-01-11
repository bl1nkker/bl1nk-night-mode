import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from './../../store/actions/authActions'

class SignInLinks extends Component {
    render() {
        return (
            <>
                <div className='navbar-buttons'>
                        <NavLink className='navbar-button' to='/create'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>New Project</div>
                        </NavLink>                
                        
                        {this.props.profile.role === 'admin' && <NavLink className='navbar-button' to='/users'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Users</div>
                        </NavLink>}

                        <NavLink to='signup' className='navbar-button' onClick={this.props.signOut}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Log Out</div>
                        </NavLink>
                        <NavLink to='/profile' className='navbar-user-icon'>{this.props.profile.initials}</NavLink>
                </div>

                <div className='navbar-buttons-mobile'>
                        <NavLink className='navbar-button' to='/create'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>New Project</div>
                        </NavLink>                
                        
                        {this.props.profile.role === 'admin' && <NavLink className='navbar-button' to='/users'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Users</div>
                        </NavLink>}

                        <NavLink to='signup' className='navbar-button' onClick={this.props.signOut}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Log Out</div>
                        </NavLink>
                        
                </div>
            </>
                

                
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect (mapStateToProps, mapDispatchToProps )(SignInLinks)