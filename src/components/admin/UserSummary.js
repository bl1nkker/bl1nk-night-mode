import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeRole } from './../../store/actions/userActions'


class UserSummary extends Component {

    changeHandler = (user, role) =>{
        this.props.change(user, role)
    }
    render() {
        return (
            <div className='card z-depth-1 project-summary user-card'>
                    <div className='card-content grey-text text-darken-3'>
                        <div className='btn btn-floating pink lighten-1'>{this.props.user.initials}</div>
                        <span>{this.props.user.firstName} {this.props.user.lastName}</span>
                        <p>Role: {this.props.user.role.charAt(0).toUpperCase() + this.props.user.role.slice(1)}</p>
                        <div className='buttons'>
                            <button disabled={this.props.user.role === 'user'} onClick={() => this.changeHandler(this.props.user, 'user')} className='waves-effect red btn change-role-btn'>User</button>
                            <button disabled={this.props.user.role === 'moderator'} onClick={() => this.changeHandler(this.props.user, 'moderator')} className='waves-effect yellow btn change-role-btn'>Moderator</button>
                            <button disabled={this.props.user.role === 'admin'} onClick={() => this.changeHandler(this.props.user, 'admin')} className='waves-effect green btn change-role-btn'>Administrator</button>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        change: (user, new_role) => dispatch(changeRole(user, new_role))
    }
}

export default connect(null, mapDispatchToProps)(UserSummary)