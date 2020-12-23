import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from './../../store/actions/authActions'

class SignInLinks extends Component {
    render() {
        return (
            <div>
                <ul className='right'>
                    <li><NavLink to='/create'>New Project</NavLink></li>
                    <li><a onClick={this.props.signOut}>LogOut</a></li>
                    <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{this.props.profile.initials}</NavLink></li>
                </ul>
            </div>
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