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
            [event.target.id]: event.target.value
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
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>

                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} value={this.state.email}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} value={this.state.password} />
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-1 z-depth-0'>Sign Up</button>
                    </div>
                    <div class='red-text center'><strong>{this.props.authErr}</strong></div>

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