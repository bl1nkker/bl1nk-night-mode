import React, { Component } from 'react'

export default class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create Project</h5>

                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange} value={this.state.firstName}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea'></textarea>
                    </div>

                    <div className='input-field'>
                        <button className='btn blue lighten-1 z-depth-0'>Create</button>
                    </div>

                </form>                
            </div>
        )
    }
}
