import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notification'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // Connects component with firebase store
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        
        return (
            !this.props.auth.uid ? 
            // Unauthorized users will not see this content
                <Redirect to='/signin' />
                :
                <div className='dashboard container'>
                    <div className='row'>
                        <div className="col s12 m6">
                            <ProjectList projects={this.props.projects}/>
                        </div>

                        <div className="col s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

// We use compose here, because we have 2 high-ordered functions (IMO 2 connections)^ connect (for Redux connection), and firebaseConect (for Firebase connection)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)
