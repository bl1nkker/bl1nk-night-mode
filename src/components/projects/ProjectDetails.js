import React from 'react'

export default function ProjectDetails(props) {
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {props.match.params.id}</span>
                    <p>Hello world</p>
                </div>

                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Bl1nk-</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
