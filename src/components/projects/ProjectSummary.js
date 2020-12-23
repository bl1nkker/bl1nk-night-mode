import React, { Component } from 'react'
import moment from 'moment'


export default  class ProjectSummary extends Component {

    render() {
        console.log()
        return (
            <div className='card z-depth-1 project-summary'>
                    <div className='card-content grey-text text-darken-3'>
                        <span className='card-title'>{this.props.project.title}</span>
                        <p>Posted by the {this.props.project.authorFirstName} {this.props.project.authorLastName}</p>
                        <p className='grey-text'>{moment(this.props.project.createdAt.toDate()).calendar()}</p>
                        
                    </div>
            </div>
        )
    }
}

