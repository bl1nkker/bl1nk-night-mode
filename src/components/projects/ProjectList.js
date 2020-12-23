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
            <div className='project-list section'>
                {this.props.projects && this.props.projects.map( (project) => (
                    <div key={project.id}>
                        <Link  to={`/project/${project.id}`}>
                            <ProjectSummary project={project}  />         
                        </Link>
                        {this.props.currentUser.role === 'moderator' || this.props.currentUser.role === 'admin' ? 
                            <button onClick={()=> this.deleteHandler(project.id)} className="waves-effect red btn">Delete Project</button>:
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