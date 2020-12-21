import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

function ProjectDetails(props) {
    console.log(props)
    return (
        !props.auth.uid ?
        // Unauthorized users will not see this content
            <Redirect to='/signin' />
                :

            (props.project ? 
                (<div className='container section project-details'>
                    <div className='card z-depth-0'>
                        <div className='card-content'>
                            <span className='card-title'>{props.project.title} - {props.project.id}</span>
                            <p>{props.project.content}</p>
                        </div>

                        <div className='card-action grey lighten-3 grey-text'>
                            <div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div> 
                            <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>)
                :
                // Here we can set Preloaders
                <h1>Loading...</h1>)
        
    )
}

const mapStateToProps = ( state, ownProps ) =>{
    console.log(state)
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects && projects[id]
    return {
        project:project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(ProjectDetails)