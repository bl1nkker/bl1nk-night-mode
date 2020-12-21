import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {
    render() {
        return (
            <div className='project-list section'>
                {this.props.projects && this.props.projects.map( (project) => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                        <ProjectSummary project={project}  />
                    </Link>
                ))}
            </div>
        )
    }
}
