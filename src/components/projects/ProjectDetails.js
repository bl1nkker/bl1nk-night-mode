
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import { changeProject } from './../../store/actions/projectActions'

class ProjectDetails extends Component {

    state = {
        editMode: false,
        title: '',
        content: ''
    }

    handleEdit = (state) =>{
        this.setState({
            editMode:!state,
            title: this.props.project.title,
            content: this.props.project.content})
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitChanges = (project) =>{
        console.log(this.props, this.state)
        this.props.editProject(this.props.match.params.id, this.state)
        this.setState({editMode:false})
    }
    render(){
        return (
            !this.props.auth.uid ?
            // Unauthorized users will not see this content
                <Redirect to='/signin' />
                    :
    
                (this.props.project ? 

                    
                    (!this.state.editMode ? 

                        //Not Edit mode
                        (<div className='project-details-container'>
                            <div className='project-details-box'>
                                <div className='project-details-main'>
                                    <h1 className='project-details-title'>{this.props.project.title}</h1>
                                    <p className='project-details-content'>{this.props.project.content}</p>
                                </div>
        
                                <div className='project-details-info'>
                                    <div>Posted by {this.props.project.authorFirstName} {this.props.project.authorLastName}</div> 
                                    <div>{moment(this.props.project.createdAt.toDate()).calendar()}</div>
                                </div>
        
                                {this.props.project.authorId === this.props.auth.uid || this.props.profile.role === 'admin'? 
                                    <button onClick={() => this.handleEdit(this.state.editMode)} className="project-details-button edit-button">Edit Project</button>:null}
                            </div>
                        </div>)
                        :

                        // Edit Mode
                        (<div className='project-details-container'>
                            <div className='project-details-box'>
                                    <input name='title' type='text' id='project-details-edit-title' onChange={(event) => this.handleChange(event)} value={this.state.title} />
                                    <textarea name='content' wrap='hard' type='text' id='project-details-edit-content' onChange={(event) => this.handleChange(event)} value={this.state.content} />
                                    <div className='project-details-edit-buttons'>
                                        <button onClick={() => this.handleEdit(this.state.editMode)}  className="project-details-button cancel-button">Cancel</button>
                                        <button onClick={() => this.submitChanges(this.props.project)}  className="project-details-button accept-button">Accept</button>
                                    </div>
                                   </div>
                        </div>)
                        )
                    :
                    // Here we can set Preloaders
                    <h1>Loading...</h1>)
            
        )
    }
    
}

const mapStateToProps = ( state, ownProps ) =>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects

    // If projects exist ==> projecr = projects[id]
    const project = projects && projects[id]
    return {
        project:project,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editProject: (project, edited) => dispatch(changeProject(project, edited))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(ProjectDetails)