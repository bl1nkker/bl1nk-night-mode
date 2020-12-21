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
            [event.target.id]: event.target.value
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
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} value={this.state.email}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} value={this.state.password} />
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-1 z-depth-0'>Login</button>
                    </div>
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