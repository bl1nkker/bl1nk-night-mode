import React, { Component } from 'react'

export default class ProjectSummary extends Component {
    render() {
        return (
            <div className='card z-depth-1 project-summary'>
                    <div className='card-content grey-text text-darken-3'>
                        <span className='card-title'>{this.props.project.title}</span>
                        <p>Posted by the {this.props.project.author}</p>
                        <p className='grey-text'>{this.props.project.content}</p>
                    </div>
            </div>
        )
    }
}
