import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeRole } from './../../store/actions/userActions'


class UserSummary extends Component {

    changeHandler = (user, role) =>{
        this.props.change(user, role)
    }
    render() {
        return (
                <div className={`user-content ${this.props.user.role}`}>
                        <div className='user-avatar'>{this.props.user.initials}</div>
                        <span>{this.props.user.firstName} {this.props.user.lastName}</span>
                        <p>Role: {this.props.user.role.charAt(0).toUpperCase() + this.props.user.role.slice(1)}</p>
                        <div className='buttons'>
                            <button  disabled={this.props.user.role === 'user'} onClick={() => this.changeHandler(this.props.user, 'user')} className='user-button user'>User</button>
                            <button className={'user-button moderator'} disabled={this.props.user.role === 'moderator'} onClick={() => this.changeHandler(this.props.user, 'moderator')}>Moderator</button>
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