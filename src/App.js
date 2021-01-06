import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Users from './components/admin/Users'

import './css/dashboard.css'
import './css/common.css'
import './css/navbar.css'
import './css/loader.css'
import './css/admin.css'
import './css/sign.css'
import './css/creator.css'
import './css/projectDetails.css'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Dashboard} /> 
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/users' component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
