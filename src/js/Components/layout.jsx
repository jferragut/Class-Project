import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import { Error404 } from './error404.jsx';
import { Dashboard } from './dashboard';
import { Home } from './home.jsx';
import { Navbar } from './navbar.jsx';
import { Login } from './login.jsx';
import { Register } from './register.jsx';
import { Profile } from './profile.jsx';
import { editProfile } from './editprofile.jsx';

import mainStore from '../Stores/mainStore.js';

export class Layout extends React.Component{
    
    constructor(){
        
        super();
        
        this.state = {
            isLoggedIn: false,
            path: window.location.pathname.substr(1)
        };   
    }
    
    componentWillMount(){
        //Set a listener on change of the mainStore (emit) to update the state
        mainStore.on('change',()=>this.setState({
            isLoggedIn: mainStore.getLoginStatus(),
        }));
    }
    
    render(){
        
        return(
            <BrowserRouter>
                <div className="container-fluid no-gutters px-0">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/coin' component={Dashboard} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/editprofile' component={editProfile} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
            );
    }
    
}

export default withRouter(Layout);