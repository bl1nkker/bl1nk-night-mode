import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // Connects component with firebase store
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import UserSummary from './UserSummary'
import Loader from './../layout/Loader'

class Users extends Component {
    render() {
        return (
            <div className='users-container'>
                
                {!this.props.users ? 
                <Loader />
                :
                this.props.users.map( user => (
                    user.id !== this.props.auth.uid &&
                    <div className='user-box' key={user.id}>
                        <UserSummary user={user}/>
                    </div>
                ))
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

// We use compose here, because we have 2 high-ordered functions (IMO 2 connections)^ connect (for Redux connection), and firebaseConect (for Firebase connection)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Users)
