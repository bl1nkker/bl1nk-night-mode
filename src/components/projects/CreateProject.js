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
        
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create Project</h5>

                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange} value={this.state.firstName}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea'></textarea>
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-1 z-depth-0'>Create</button>
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
