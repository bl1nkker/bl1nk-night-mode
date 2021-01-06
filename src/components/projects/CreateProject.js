import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from './../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.createProject(this.state)

        // After creating an project, this will redirect us to home page
        this.props.history.push('/')
    }
    render() {
        return (
        !this.props.auth.uid ?
        // Unauthorized users will not see this content
            <Redirect to='/signin' />
                :
        
            <div className='creator-container'>
                <form onSubmit={this.handleSubmit} className='creator-form'>
                    <h1 className='creator-title'>Create Project</h1>

                    <input name='title' type='text' id='creator-input-title' onChange={this.handleChange} value={this.state.firstName} placeholder='Input yout Title'/>

                    <textarea name='content' id='creator-input-content' onChange={this.handleChange} className='materialize-textarea' placeholder='Input yout Content'></textarea>

                    <div className='input-field'>
                        <button className='creator-submit-button'>Create</button>
                    </div>

                </form>                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
