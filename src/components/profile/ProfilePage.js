import React, { Component } from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {deleteProject} from './../../store/actions/projectActions'

class ProfilePage extends Component {

    deleteHandler = (project_id) =>{
        this.props.deleteProject(project_id)
    }
    
    render() {
        return (
            <div className='profile-page-container'>

                <div className='profile-page-main-info'>
                    <div className='profile-page-title'>Welcome back, {this.props.profile.firstName + ' '+ this.props.profile.lastName}</div>
                    {/* <div className='profile-page-email'>dna@gmail.com</div> */}
                </div>

                <div className='profile-page-articles'>
                    <div className='profile-page-articles-total'>Your articles:</div>
                    
                    <div className='profile-page-articles-list'>
                        {this.props.projects && this.props.projects.map( article =>
                            (
                                    <div className='profile-page-article' key={article.id}>
                                        <div className='profile-page-article-info'>
                                            <h3 className='profile-page-article-title'>{article.title}</h3>
                                            <p className='profile-page-article-date'>{moment(article.createdAt.toDate()).calendar()}</p>
                                        </div>

                                        <div>
                                            <Link className='profile-page-article-button read-more' to={`/project/${article.id}`}>Read More</Link> 
                                            <button className='profile-page-article-button delete' onClick={()=> this.deleteHandler(article.id)}>Delete Project</button>
                                        </div>
                                    </div>

                                
                            ))}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    console.log(state)
    return{
        profile: state.firebase.profile,
        projects: state.firestore.ordered.projects.filter((project) => project.authorId === state.firebase.auth.uid)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteProject: (project_id) => dispatch(deleteProject(project_id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProfilePage)
