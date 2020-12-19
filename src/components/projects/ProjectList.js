import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'

export default class ProjectList extends Component {
    render() {
        return (
            <div className='project-list section'>
                {this.props.projects && this.props.projects.map( (project) => (
                    <ProjectSummary project={project} key={project.id} />
                ))}
            </div>
        )
    }
}
