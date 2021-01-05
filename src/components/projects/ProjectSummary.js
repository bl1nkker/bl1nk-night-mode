import React, { Component } from 'react'
import moment from 'moment'


export default  class ProjectSummary extends Component {

    render() {
        console.log(this.props.project)
        return (
            <div >
                    <div className='dashboard-content'>
                        <h3 className=''>{this.props.project.title}</h3>
                        <h2>{this.props.project.authorFirstName[0]}{this.props.project.authorLastName[0]}</h2>
                        <p className=''>{moment(this.props.project.createdAt.toDate()).calendar()}</p>
                        
                    </div>
            </div>
        )
    }
}

