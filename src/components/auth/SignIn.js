import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import { signIn } from './../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (event) => {
        this.setState({
            //!!! Костыль !!!
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.signIn(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }
    render() {
        return (
           // If user is already authorized, he will be redirect to home page
           this.props.auth.uid ? <Redirect to='/' />
           :
           // If not, the Sign In content will show
            <div className='signin-container'>
                <form onSubmit={this.handleSubmit} className={`signin-form ${this.props.authErr && 'error-mode'}`}>
                    <h1 className='signin-title'>LogIn</h1>
                    
                        <input name='email' type='email' id='signin-input-email' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>

                        <input  name='password' type='password' id='signin-input-password' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>

                        <button className='signin-submit-button'>Login</button>
                    <div class='red-text center'><strong>{this.props.authErr}</strong></div>

                </form>                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authErr: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)