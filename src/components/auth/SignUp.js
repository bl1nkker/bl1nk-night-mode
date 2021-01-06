import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from './../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.signUp(this.state)
    }
    render() {
        return (
            // If user is already authorized, he will be redirect to home page
            this.props.auth.uid ? <Redirect to='/' />
            :
            // If not, the Sign Up content will show
            <div className='signup-container'>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <h1 className='signin-title'>Sign Up</h1>

                        <input type='text' name='firstName' id='signup-input-firstName' onChange={this.handleChange} value={this.state.firstName} placeholder='First Name'/>

                        <input type='text' name='lastName' id='signup-input-lastName' onChange={this.handleChange} value={this.state.lastName} placeholder='Last Name'/>

                        <input type='email' name='email' id='signup-input-email' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>

                        <input type='password' name='password' id='signup-input-password' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>


                    <div className='input-field'>
                        <button className='signin-submit-button'>Sign Up</button>
                    </div>

                </form>                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        authErr: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)