import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteProject} from './../../store/actions/projectActions'

class ProjectList extends Component {

    deleteHandler = (project_id) =>{
        this.props.deleteProject(project_id)
    }

    render() {
        return (
            <div className='dashboard-container'>
                {this.props.projects && this.props.projects.map( (project) => (
                    <div className='dashboard-box' key={project.id}>
                        
                            <ProjectSummary project={project}  />  
                            <Link className='dashboard-button read-more' to={`/project/${project.id}`}>Read More</Link>   
                        {this.props.currentUser.role === 'moderator' || this.props.currentUser.role === 'admin' ? 
                            <button className='dashboard-button delete' onClick={()=> this.deleteHandler(project.id)}>Delete Project</button>:
                            null}
                    </div>
                    
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        currentUser: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteProject: (project_id) => dispatch(deleteProject(project_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)