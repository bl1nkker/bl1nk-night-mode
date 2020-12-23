import React, { Component } from 'react'
import { connect } from 'react-redux'


class Notification extends Component {
    render() {
        return (
            <div className='section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>Notifications</span>
                        <ul className='notifications'>
                            {/* {this.props.notifications.map( (notification) =>(
                                <li>{notification}</li>
                                ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
    }
}

export default connect(mapStateToProps)(Notification)